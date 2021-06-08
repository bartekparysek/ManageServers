import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

import Button from './Button';

const StyledDropDown = styled.div`
   position: absolute;
   transform: translateX(calc(50vw - 2rem)) translateY(2vh);
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`
const DropDown = ({ id }) => {
   const [server, setServer] = useState(null);
   useEffect(() => {
      const getresponse = async () => {
         const response = await axios.get(`http://localhost:4454/servers/${id}`)
         setServer(response.data);
      }
      getresponse();
   }, [id]);

   return (
      <StyledDropDown >
         {server && <Button status={server.status} id={id} />}
      </StyledDropDown>
   )
}

export default DropDown
