import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import axios from 'axios';

import Button from './Button';

const StyledDropDown = styled.div`
   position: absolute;
   right: 0;
   top: -0.25rem;
   z-index: 99;
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

   const handleClick = e => {
      if (node.current.contains(e.target)) {
         return;
      }
      openChange(false);
   }

   useEffect(() => {
      document.addEventListener('mousedown', handleClick);
      return () => {
         document.removeEventListener('mousedown', handleClick);
      };
   }, [])

   return (
      <StyledDropDown ref={node} onClick={e => openChange(!open)} >
         {server && <Button
            status={server.status}
            id={id}
            onServerChange={setServer}
         />}
      </StyledDropDown>
   )
}

export default DropDown
