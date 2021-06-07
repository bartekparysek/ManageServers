import React from 'react'
import styled from 'styled-components';
import NavBar from './Navbar';
import ServerList from './ServersList';
import SearchBar from './SearchBar';
import ServerNumber from './ServerNumber';
import GlobalStyle from '../globalStyles';

const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   color: #494E61;
   font-family: 'Open Sans',sans-serif;
   margin: 0 auto;
   width: 60vw;

   /* p{
      font-size: 21px;
      font-weight: 600;
   } */

`
const IntroWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 0 ;
`;

const App = () => {
   return (
      <>
         <GlobalStyle />
         <NavBar />
         <StyledContainer>
            <IntroWrapper>
               <ServerNumber />
               <SearchBar />
            </IntroWrapper>
            <ServerList />
         </StyledContainer>

      </>
   )
}
export default App;