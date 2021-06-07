import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListWrapper = styled.div`
/* display: flex;
flex-direction: column; */
background-color: #ffff;
padding: 3rem;
border: 2px solid #EDEDF0;
`;
const ListHead = styled.div`
   position: relative;
   display: flex;

   p{
      padding: 0 2rem;
      color: #9CA7D3;
      font-size: 14px;
      text-align: center;
      font-weight: 500;
      line-height: 44px;
      text-transform: uppercase;
   }

`
const List = styled.ul`
   list-style-type: none;
`
const ListItem = styled.li`
   display: flex;
   align-items: center;
   padding: 1rem;
`
const ServersList = () => {
   const [servers, setServers] = useState(null);

   useEffect(() => {
      const getresponse = async () => {
         const response = await axios.get('http://localhost:4454/servers');
         setServers(response.data);
      }
      getresponse();
   }, []);

   return (
      <ListWrapper>
         <ListHead>
            <p>Name</p>
            <p>Status</p>
         </ListHead>
         <List>
            {servers && servers.map(server => (
               <ListItem key={server.id}>
                  <h5>{server.name}</h5>
                  <p>{server.status}</p>
               </ListItem>
            ))}
         </List>
      </ListWrapper>
   );
}

export default ServersList
