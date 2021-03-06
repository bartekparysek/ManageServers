import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'

const StyledInput = styled.input`
   border: 2px solid #D4D7E1;
   border-radius: 2rem;
   padding:  0.4rem 3.5rem;
   background-color: #F2F3F6;
   color:#A9AEC1;
   font-size: 14px;
   font-family: 'Open Sans', sans-serif;

   &::placeholder{
      color:#A9AEC1;
   }
   &:focus {
      outline:none;
     border:2px solid #4D90FE;
     border-radius: 5rem;
   }
`
const Search = styled(FiSearch)`
   color:#A9AEC1;
   position: absolute;
   margin: 0.5rem 0 0 0.6rem;
   width: 1.1rem;
   height: 1.2rem;
   font-weight: bold;
`;

const SearchBar = ({ servers, setSearchResultsChange, searchTerm, setSearchTermChange, setServers }) => {

   const handleChange = event => {
      setSearchTermChange(event.target.value);
   };
   useEffect(() => {
      if (servers) {
         const results = servers
            .filter(server => {
               return server.name.toLowerCase().includes(searchTerm.toLowerCase());
            });

         setSearchResultsChange(results);
      }

   }, [servers, searchTerm, setServers, setSearchResultsChange]);

   return (
      <div>
         <i>
            <Search />
         </i>
         <StyledInput
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
         />

      </div>
   )
}

export default SearchBar
