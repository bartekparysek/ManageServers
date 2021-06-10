import React, { useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components';

import Button from './Button';

const StyledDropDown = styled.div`
   position: absolute;
   right: 0;
   top: -0.25rem;
   z-index: 99;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const DropDown = ({ server, onServerChange, open, openChange, id }) => {
   const node = useRef();

   const handleClick = useCallback((e) => {
      if (node.current.contains(e.target)) {
         return;
      }
      openChange(false);
   }, [openChange]);

   useEffect(() => {
      document.addEventListener('mousedown', handleClick);
      return () => {
         document.removeEventListener('mousedown', handleClick);
      };
   }, [handleClick])

   return (
      <StyledDropDown ref={node} onClick={e => openChange(!open)} >
         {server && <Button
            status={server.status}
            id={id}
            onServerChange={onServerChange}
         />}
      </StyledDropDown>
   )
}

export default DropDown
