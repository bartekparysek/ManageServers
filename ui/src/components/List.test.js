import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react'
import axios from 'axios';
import List from './List';

jest.mock('axios');
test('should fetch servers', () => {
   const servers = [{
      "id": 1,
      "name": " US East (Virginia)",
      "status": "ONLINE"
   },
   {
      "id": 2,
      "name": " US East (Ohio)",
      "status": "REBOOTING"
   }];
   const resp = { data: servers };
   axios.get.mockResolvedValue(resp);
   return
})

afterEach(cleanup);

it('returns useInterval function', () => {

})