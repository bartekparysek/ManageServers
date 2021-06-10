import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import { server } from '../mocks/server.js'
import List from './List';
import useInterval from './UseInterval'

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


afterEach(cleanup);
// List component test
// check if list component has props of servers and onSearchResultsChange
// check if list has useInterval method
// check it useInterval has parameters of function and delay time of 1000 s
//check if function parameter filters servers for  status rebooting
// check if has conditional statement
// check if it makes forEach function for every filtered server with reeboting status
// check if make async await axios call
// check if it checks for status change of online and changes state of server using on SearchResultsChange
describe('List', () => {
   let callback = jest.fn();


   test('works', () => {
      const { result } = renderHook(() => useInterval(callback, 1000));

   })
});