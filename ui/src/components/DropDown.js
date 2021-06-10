import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import axios from 'axios';

import Button from './Button';

const StyledDropDown = styled.div`
   position: absolute;
   transform: translateX(calc(50vw - 2rem)) translateY(2vh);
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`
const DropDown = ({ open, openChange, id }) => {
   const [server, setServer] = useState(null);
   const node = useRef();
   useEffect(() => {
      const getresponse = async () => {
         const response = await axios.get(`http://localhost:4454/servers/${id}`)
         setServer(response.data);
      }
      getresponse();
   }, [id]);

   const handleeClick = e => {
      if (node.current.contains(e.target)) {
         return;
      }
   }

   return (
      <StyledDropDown onClick={e => openChange(!open)} >
         {server && <Button
            status={server.status}
            id={id}
            onServerChange={setServer}
         />}
      </StyledDropDown>
   )
}

export default DropDown
