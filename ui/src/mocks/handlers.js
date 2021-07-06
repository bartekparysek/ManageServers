import { rest } from 'msw'

export const handlers = [
   rest.get('http://localhost:4454/servers/', (req, res, ctx) => {
      return res(
         ctx.json([
            {
               id: 1,
               name: 'US East (Virginia)',
               status: 'ONLINE'
            },
            {
               id: 2,
               name: 'US East (Ohio)',
               status: 'ONLINE'
            },
            {
               id: 3,
               name: 'US West (N. California)',
               status: 'OFFLINE'
            },
         ])
      )
   }),
   rest.put('http://localhost:4454/servers/1/reboot', (req, res, ctx) => {
      return res(
         ctx.json(
            {
               id: 1,
               name: 'US East (Virginia)',
               status: 'REBOOTING',
            }
         )
      )
   }),
   rest.get('http://localhost:4454/servers/1', (req, res, ctx) => {
      return res(
         ctx.json(
            {
               id: 1,
               name: 'US East (Virginia)',
               status: 'ONLINE',
            }
         )
      )
   }),
   rest.put('http://localhost:4454/servers/1/off', (req, res, ctx) => {
      return res(
         ctx.json(
            {
               id: 1,
               name: 'US East (Virginia)',
               status: 'OFFLINE',
            }
         )
      )
   }),
   rest.put('http://localhost:4454/servers/1/on', (req, res, ctx) => {
      return res(
         ctx.json(
            {
               id: 1,
               name: 'US East (Virginia)',
               status: 'ONLINE',
            }
         )
      )
   }),
]