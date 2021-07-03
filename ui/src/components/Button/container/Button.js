import React, { useContext, useState, useEffect, } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { StatusContext } from '../../List';
import RenderButton from '../components/RenderButton';

const StyledWrapper = styled.div`
display: flex;
flex-direction:column;
`

const Button = ({ status, id, onServerChange }) => {
   const listServerStatus = useContext(StatusContext);
   let servers = listServerStatus.servers;
   const [newStatus, setNewStatus] = useState('');

   useEffect(() => {
      const updateServer = () => {
         if (newStatus === 'off' || newStatus === 'on' || newStatus === 'reboot') {
            axios.put(`http://localhost:4454/servers/${id}/${newStatus}`)
               .then(response => {
                  let resultsCopy = [...servers];
                  let server = { ...resultsCopy[id - 1] };
                  server.status = response.data.status;
                  resultsCopy[id - 1] = server;
                  onServerChange(resultsCopy);
                  listServerStatus.onStatusChange(response.data.status)
               });
         }
      }
      updateServer();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id, newStatus])

   return (
      <StyledWrapper>
         <RenderButton
            status={status}
            listServerStatus={listServerStatus}
            setNewStatus={setNewStatus}
         />
      </StyledWrapper>
   );
}

export default Button;
