import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import List from './List';
import SearchBar from './SearchBar';
import ServerNumber from './ServerNumber';

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
const IntroWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 3rem 0 0.5rem 0 ;
   h4{
      margin:0;
   }
`;
const ServersList = () => {
   const [servers, setServers] = useState(null);
   const [searchResults, setSearchResults] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const [status, setStatus] = useState(null);
   const [itemId, setItemId] = useState(null);

   useEffect(() => {
      const getresponse = async () => {
         const response = await axios.get('http://localhost:4454/servers');
         setServers(response.data);
      }
      getresponse();
   }, []);

   useEffect(() => {
      if (status) {
         setSearchResults(prev => {
            return prev.map(server => {
               if (server.id === itemId) {
                  return { ...server, status: status }
               }
               return server
            })
         })

      }
   }, [status, itemId]);


   return (
      <>
         <IntroWrapper>
            <ServerNumber servers={servers} />
            <SearchBar
               servers={servers}
               setSearchResultsChange={setSearchResults}
               searchTerm={searchTerm}
               setSearchTermChange={setSearchTerm}
               setServers={setServers}
            />
         </IntroWrapper>
         <ListWrapper>
            <ListHead>
               <p>Name</p>
               <p>Status</p>
            </ListHead>
            <List
               servers={searchResults}
               setStatus={setStatus}
               itemId={itemId}
               setItemId={setItemId}
               setSearchResults={setSearchResults}
            />
         </ListWrapper>
      </>
   );
}

export default ServersList;