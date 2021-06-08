import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const StyledDropDown = styled.div`
   position: absolute;
   background-color: #fff;
   transform: translateX(calc(50vw - 2rem)) translateY(2vh);
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


const DropDown = ({ id }) => {
   const [server, setServer] = useState(null);
   useEffect(() => {
      const getresponse = async () => {
         const response = await axios.get(`http://localhost:4454/servers/${id}`)
         setServer(response.data);
         console.log(response.data);
      }
      getresponse();
   }, [id]);

   return (
      <StyledDropDown >
         <p>{server && server.status}</p>
         <p>Reload</p>
      </StyledDropDown>
   )
}

export default DropDown
