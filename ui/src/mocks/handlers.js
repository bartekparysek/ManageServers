import { rest } from 'msw'

export const handlers = [
   rest.get('http://localhost:4454/servers/:serverId', (req, res, ctx) => {
      const { serverId } = req.params;
      const getRandomTime = (min, max) => {
         return Math.random() * (max - min) + min;
      }
      const statusChangeOnTimeout = () => {
         let server = ctx.json({
            id: serverId,
            name: 'US East (Virginia)',
            status: 'REBOOTING'
         });
         setTimeout(() => {
            server.status = 'ONLINE';
         }, getRandomTime(1000, 5000))

         return server
      }

      return res(
         statusChangeOnTimeout()
      )

   }),
]