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
]