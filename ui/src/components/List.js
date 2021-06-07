import React from 'react';
import styled from 'styled-components';
import { MdMoreHoriz as More, MdClose as Failed, MdBrightness1 as Live } from 'react-icons/md'

const StyledList = styled.ul`
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
      height: 2rem;
   }
`
const InfoWrapper = styled.div`
   display:flex;
   align-items: center;


`
const Name = styled.div`

   h5{
      padding-right:5rem;
   }
`;

const Status = styled.div`
   display: flex;
   align-items: center;
   svg{
      width: 0.75em;
      height: 0.95em;
      margin-right: 0.5rem;
   }
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
      return <Failed style={{ color: "#EA5885" }} />
   } if (status === "ONLINE") {
      return <Live style={{ color: "#33CAD4" }} />
   }
   return null
}

const List = ({ servers }) => {
   return (
      <StyledList>
         {servers && servers.map(server => (
            <ListItem key={server.id}>
               <InfoWrapper>
                  <Name>
                     <h5>{server.name}</h5>
                  </Name>
                  <Status>
                     {renderIcon(server.status)}
                     <p>{server.status}</p>
                  </Status>
               </InfoWrapper>
               <StyledMore />
            </ListItem>
         ))}
      </StyledList>
   )
}

export default List;
