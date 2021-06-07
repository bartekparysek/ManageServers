import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdMoreHoriz as More, MdClose as Failed, MdBrightness1 as Live } from 'react-icons/md'

const ListWrapper = styled.div`
/* display: flex;
flex-direction: column; */
background-color: #ffff;
border: 2px solid #EDEDF0;
`;
const ListHead = styled.div`
   position: relative;
   display: flex;
   padding: 1rem;
   border-bottom:2px solid #EDEDF0 ;

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
   padding:0;
`
const ListItem = styled.li`
   display: flex;
   align-items: center;
   border-bottom: 2px solid #EDEDF0;
   padding: 0 3rem;
   justify-content: space-between;
   svg{
      color:#A9AEC1;
      width: 2rem;
      height: 1.5rem;
   }
`
const InfoWrapper = styled.div`
   display:flex;
   align-items: center;


`
const Status = styled.div`
   display: flex;
   align-items: center;
   svg{
      width: 0.75em;
      height: 0.95em;
   }
`;

const renderIcon = (status) => {
   if (status === "OFFLINE") {
      return <Failed style={{ color: "#EA5885" }} />
   } if (status === "ONLINE") {
      return <Live style={{ color: "#33CAD4" }} />
   }
   return null
}
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
                  <InfoWrapper>
                     <h5>{server.name}</h5>
                     <Status>
                        {renderIcon(server.status)}
                        <p>{server.status}</p>
                     </Status>

                  </InfoWrapper>
                  <More />
               </ListItem>
            ))}
         </List>
      </ListWrapper>
   );
}

export default ServersList
