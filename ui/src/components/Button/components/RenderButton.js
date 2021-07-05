import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
   padding: 0.25rem 4rem 0.25rem 2rem;
   font-size: 13px;
   font-family: 'Open Sans',sans-serif;
   font-weight: 600;
   line-height: 50px;
   letter-spacing: 0;
   border:none;
   color:#494E61;
   background-color: #fff;

   &:hover{
      background-color:#F2F3F6;
   }
`;

const RenderButton = ({ status, listServerStatus, setNewStatus }) => {
   const handleChange = (clickedStatus) => {
      setNewStatus(clickedStatus);
   }

   if (status === 'ONLINE') {
      return (
         <>
            <StyledButton
               onMouseLeave={() => listServerStatus.setStatus(null)}
               onClick={() => handleChange('off')}>
               Turn off
            </StyledButton>
            <StyledButton
               onMouseLeave={() => listServerStatus.setStatus(null)}
               onClick={() => handleChange('reboot')}>
               Reboot
            </StyledButton>
         </>
      );
   } if (status === 'OFFLINE') {
      return (
         <>
            <StyledButton
               onMouseLeave={() => listServerStatus.setStatus(null)}
               onClick={() => handleChange('on')}>
               Turn on
            </StyledButton>
         </>
      );
   } else {
      return null;
   }
}

export default RenderButton
