import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdMoreHoriz as More, MdClose as Failed, MdBrightness1 as Live } from 'react-icons/md'
import DropDown from './DropDown';

const StyledList = styled.ul`
   margin:0;
   list-style-type: none;
   padding:0;
`
const ListItem = styled.li`
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
      width: 1em;
      height: 1em;
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
   const [dropdown, setDropDown] = useState(false);
   const [clickedItemId, setClickedItemId] = useState(false);


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
               <StyledMore onClick={() => setClickedItemId(!clickedItemId), console.log(clickedItemId)} />
               <DropDown className={clickedItemId} />
            </ListItem>


         ))}

      </StyledList>
   )
}

export default List;
