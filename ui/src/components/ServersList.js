import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import List from './List';

const ListWrapper = styled.div`
background-color: #ffff;
border: 2px solid #EDEDF0;
`;
const ListHead = styled.div`
   position: relative;
   display: flex;
   padding: 1rem;
   border-bottom:2px solid #EDEDF0 ;

   p{
      padding: 0 3rem;
      color: #9CA7D3;
      font-size: 14px;
      text-align: center;
      font-weight: 500;
      line-height: 44px;
      text-transform: uppercase;
   }
   p ~ p {
      padding-left: 15rem;
   }
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
         <List servers={servers} />
      </ListWrapper>
   );
}

export default ServersList;