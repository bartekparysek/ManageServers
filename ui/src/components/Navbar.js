import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
position:relative;
top:0;
background-color: #494E61;
height: 73px;
color: #fff;
padding: 20px;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
line-height: 44px;
font-weight: bold;


`;

const Navbar = () => {
   return (
      <>
         <StyledNav>
            <p>Recruitment task</p>
         </StyledNav>
      </>

   );
}

export default Navbar
