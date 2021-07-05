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
   })
]