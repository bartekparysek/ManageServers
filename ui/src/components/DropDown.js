import React from 'react'
import styled from 'styled-components';

const StyledDropDown = styled.div`
   visibility: hidden;
   position: absolute;
   background-color: #fff;
   z-index: 99;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   ${props => props.isActive && `
      visibility: visible;
   `}
   p{
      text-align: center;
      padding: 0.5rem 1rem;
   }

   p:hover{
      background-color:#F2F3F6;
   }

`

const DropDown = ({ isActive }) => {
   return (
      <StyledDropDown isActive={isActive} >
         <p>Turn On</p>
         <p>Reload</p>
      </StyledDropDown>
   )
}

export default DropDown
