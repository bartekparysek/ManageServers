import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdMoreHoriz as More } from 'react-icons/md'
import { CgClose as Offline } from 'react-icons/cg'
import { VscCircleFilled as Online } from 'react-icons/vsc'
import DropDown from './DropDown';
import { useInterval } from './UseInterval';

export const StatusContext = createContext();
const StyledList = styled.ul`
   margin:0;
   list-style-type: none;
   padding:0;
`
const ListItem = styled.li`
   position: relative;
   display: flex;
   align-items: center;
   border-bottom: 2px solid #EDEDF0;
   padding: 0 36px 0 42px;
   justify-content: space-between;
   svg{
      color:#A9AEC1;
      width: 2rem;
      height: 2rem;
   }
`
const InfoWrapper = styled.div`
   display:flex;
   align-items: center;
`
const Name = styled.div`
   min-width: 17vw;
   font-size:13px;
   font-weight: 600;
   letter-spacing: 0;
   line-height: 59px;
   h5{
      padding-left: 1.5rem;
      margin:0;
   }
`;
const Status = styled.div`
   display: flex;
   align-items: center;
   font-size: 12px;
   font-weight: 600;
   letter-spacing: 0;
   line-height: 59px;
   padding-left: 0.5rem;
   svg{
      width: 1.5em;
      height: 1.5em;
      margin-right: 0.25rem;
   }
   p{
      color: ${({ status }) => {
      if (status === "ONLINE") {
         return '#33CAD4'
      } if (status === "REBOOTING") {
         return '#9CA7D3'
      }
   }}
   }
   ${({ status }) => status === "REBOOTING" && `
   p:after{
      content: '...';
   }`}
`;
const StyledMore = styled(More)`
   border-radius: 50px;
   padding: 0.3rem;

&:hover{
   background-color: #F2F3F6;

}
`
const renderIcon = (status) => {
   if (status === "OFFLINE") {
      return <Offline style={{ color: "#EA5885" }} />
   } if (status === "ONLINE") {
      return <Online style={{ color: "#33CAD4" }} />
   }
   return null
}


export const List = ({ servers, setStatus, itemId, setItemId, setSearchResults }) => {
   const [open, setOpen] = useState(false);

   const renderDropDown = (id) => {
      setItemId(id);
      setOpen(!open);
   }

   useInterval(() => {
      const rebooting = servers.filter(server => server.status === "REBOOTING")
      if (servers && rebooting.length > 0) {
         rebooting.forEach(item => {
            const getresponse = async () => {
               const response = await axios.get(`http://localhost:4454/servers/${item.id}`);

               if (response.data.status === "ONLINE") {
                  setSearchResults(prev => {
                     return prev.map(server => {
                        if (server.id === itemId) {
                           return { ...server, status: response.data.status }
                        }
                        return server
                     })
                  })
               }
            }
            getresponse();
         });
      }
   }, 1000);


   return (
      <StyledList>
         {servers && servers.map(server => (
            <ListItem key={server.id}>
               <InfoWrapper>
                  <Name>
                     <h5>{server.name}</h5>
                  </Name>
                  <Status status={server.status}>
                     {renderIcon(server.status)}
                     <p>{server.status}</p>
                  </Status>
               </InfoWrapper>
               <StyledMore aria-label={server.name} onClick={() => renderDropDown(server.id)} />
               <StatusContext.Provider value={{ setStatus, servers }}>
                  {open && itemId === server.id && <DropDown
                     server={server}
                     setSearchResults={setSearchResults}
                     open={open}
                     openChange={setOpen}
                     id={server.id}
                  />}
               </StatusContext.Provider>

            </ListItem>

         ))}

      </StyledList>
   )
}

export default List;
