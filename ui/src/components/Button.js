import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

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

const Button = ({ status, id }) => {
   const turnOffServer = () => {
      axios.put(`http://localhost:4454/servers/${id}/off`)
         .then(response => console.log(response));
   }
   const turnOnServer = () => {
      axios.put(`http://localhost:4454/servers/${id}/on`)
         .then(response => console.log(response));
   }
   const rebootServer = () => {
      axios.put(`http://localhost:4454/servers/${id}/reboot`)
         .then(response => console.log(response));
   }

   const renderButton = (status) => {
      if (status === 'ONLINE') {
         return (
            <>
               <StyledButton onClick={turnOffServer}>Turn off</StyledButton>
               <StyledButton onClick={rebootServer}>Reebot</StyledButton>
            </>
         );
      } if (status === 'OFFLINE') {
         return (
            <>
               <StyledButton onClick={turnOnServer}>Turn on</StyledButton>
            </>
         );
      } else {
         return <p>Reebooting...</p>
      }
   }
   return (
      <StyledWrapper>
         {renderButton(status)}
      </StyledWrapper>
   );
}

export default Button;