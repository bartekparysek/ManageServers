import React from 'react';
import styled from 'styled-components';
import { MdPanoramaFishEye } from 'react-icons/md';

const StyledNav = styled.nav`
position:relative;
display: flex;
align-items: center;
top:0;
background-color: #494E61;
height: 73px;
color: #fff;
padding: 2rem;
font-family: 'Montserrat', sans-serif;
line-height: 35px;
font-weight: bold;

p{
   border-right: 2px solid #757B8F;
   max-width: max-content;
   padding: 0 2rem 0 1rem;
   font-size: 14px;
}

`;
const Logo = styled(MdPanoramaFishEye)`
   color: #7D82F7;
   width: 1.5rem;
   height: 1.5rem;
`;

const Navbar = () => {
   return (
      <>
         <StyledNav>
            <Logo />
            <p>Recruitment task</p>
         </StyledNav>
      </>

   );
}

export default Navbar
