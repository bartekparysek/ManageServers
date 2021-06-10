import React, { useContext } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { StatusContext } from './List';

const StyledButton = styled.button`
   padding: 0.25rem 4rem 0.25rem 2rem;
   font-size: 13px;
   font-family: 'Open Sans',sans-serif;
   font-weight: 600;
   line-height: 50px;
   letter-spacing: 0;
   border:none;
   color:#494E61;
   background-color: #fff;

   &:hover{
      background-color:#F2F3F6;
   }
`;
const StyledWrapper = styled.div`
display: flex;
flex-direction:column;
`

const Button = ({ status, id, onServerChange }) => {
   const listServerStatus = useContext(StatusContext);
   let servers = listServerStatus.servers;

   const changeStatus = (status) => {
      let resultsCopy = [...servers];
      let server = { ...resultsCopy[id - 1] };
      server.status = status;
      resultsCopy[id - 1] = server;
      onServerChange(resultsCopy);
   }

   const turnOffServer = () => {
      axios.put(`http://localhost:4454/servers/${id}/off`)
         .then(response => {
            changeStatus(response.data.status)
            listServerStatus.onStatusChange(response.data.status)
         });
   }
   const turnOnServer = () => {
      axios.put(`http://localhost:4454/servers/${id}/on`)
         .then(response => {
            changeStatus(response.data.status)
            listServerStatus.onStatusChange(response.data.status)
         });
   }
   const rebootServer = () => {
      axios.put(`http://localhost:4454/servers/${id}/reboot`)
         .then(response => {
            changeStatus(response.data.status)
            listServerStatus.onStatusChange(response.data.status)
         });
   }

   const renderButton = (status) => {
      if (status === 'ONLINE') {
         return (
            <>
               <StyledButton onMouseLeave={listServerStatus.onStatusChange(null)} onClick={turnOffServer}>Turn off</StyledButton>
               <StyledButton onMouseLeave={listServerStatus.onStatusChange(null)} onClick={rebootServer}>Reebot</StyledButton>
            </>
         );
      } if (status === 'OFFLINE') {
         return (
            <>
               <StyledButton onMouseLeave={listServerStatus.onStatusChange(null)} onClick={turnOnServer}>Turn on</StyledButton>
            </>
         );
      } else {
         return null;
      }
   }
   return (
      <StyledWrapper>
         {renderButton(status)}
      </StyledWrapper>
   );
}

export default Button;
