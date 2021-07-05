import React, { useContext, useState, useEffect, } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { StatusContext } from '../../List';
import RenderButton from '../components/RenderButton';

const StyledWrapper = styled.div`
display: flex;
flex-direction:column;
`

const Button = ({ status, id, setSearchResults }) => {
   const listServerStatus = useContext(StatusContext);
   const [newStatus, setNewStatus] = useState('');

   useEffect(() => {
      const updateServer = () => {
         if (newStatus === 'off' || newStatus === 'on' || newStatus === 'reboot') {
            axios.put(`http://localhost:4454/servers/${id}/${newStatus}`)
               .then(response => {
                  setSearchResults(prev => {
                     return prev.map(server => {
                        if (server.id === id) {
                           return { ...server, status: response.data.status }
                        }
                        return server
                     })
                  })

               });
         }
      }
      updateServer();

   }, [id, newStatus, setSearchResults])

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
