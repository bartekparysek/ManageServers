import React from 'react'
import styled from 'styled-components';

import NavBar from './Navbar';
import ServerList from './ServersList';
import GlobalStyle from '../globalStyles';

const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   color: #494E61;
   font-family: 'Open Sans',sans-serif;
   margin: 0 auto;
   width: 60vw;
`


const App = () => {
   return (
      <>
         <GlobalStyle />
         <NavBar />
         <StyledContainer>
            <ServerList />
         </StyledContainer>

      </>
   )
}
export default App;