import React from 'react'

const ServerNumber = ({ servers }) => {
   return (
      <div>
         <h4>Servers</h4>
         <p>Number of elements: {servers && servers.length}</p>
      </div>
   )
}

export default ServerNumber
