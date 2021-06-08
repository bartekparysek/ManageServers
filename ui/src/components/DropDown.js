import React from 'react'
import styled from 'styled-components';

const StyledDropDown = styled.div`
   position: absolute;
   background-color: #fff;
   transform: translateX(calc(50vw - 2rem)) translateY(4vh);
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   p{
      padding: 0.25rem 4rem;
      font-size: 13px;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 0;
   }

   p:hover{
      background-color:#F2F3F6;
   }

`

const DropDown = ({ status }) => {
   return (
      <StyledDropDown >
         <p>Turn On</p>
         <p>Reload</p>
      </StyledDropDown>
   )
}

export default DropDown
