import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
position:relative;
top:0;
background-color: #494E61;
height: 73px;
color: #fff;
padding: 1rem 0;
font-family: 'Montserrat', sans-serif;
line-height: 44px;
font-weight: bold;

p{
   border-right: 2px solid #757B8F;
   width: max-content;
   padding: 0 3rem;
   font-size: 14px;
}

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
