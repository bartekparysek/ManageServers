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
`
const IntroWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 3rem 0 0.5rem 0 ;
   h4{
      margin:0;
   }
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