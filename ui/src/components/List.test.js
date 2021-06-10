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
describe('List', () => {
   let callback = jest.fn();


   test('works', () => {
      const { result } = renderHook(() => useInterval(callback, 1000));

   })
});