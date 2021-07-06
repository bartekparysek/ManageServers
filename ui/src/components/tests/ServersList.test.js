import React from 'react';
import { render, screen, waitFor, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServersList from '../ServersList';

test('reboot button changes server status', async () => {
   render(<ServersList />);
   const virginiaServerMore = await screen.findByLabelText('US East (Virginia)');
   userEvent.click(virginiaServerMore);

   const rebootButton = screen.queryByRole('button', { name: 'Reboot' });
   userEvent.click(rebootButton);

   await waitFor(() => expect(rebootButton).not.toBeInTheDocument())

   const rebootStatus = screen.getByText(/rebooting/i);
   expect(rebootStatus).toBeInTheDocument();

   const virginia = screen.getByRole('heading', { name: 'US East (Virginia)' });

   expect(virginia).toBeInTheDocument();


   await waitFor(async () => {
      const status = await screen.findAllByText('ONLINE');
      expect(status).toHaveLength(2)
   }, { timeout: 3000 });

});

test('turn off and turn on buttons', async () => {
   render(<ServersList />);
   const virginiaServerMore = await screen.findByLabelText('US East (Virginia)');
   userEvent.click(virginiaServerMore);

   const turnOffButton = await screen.findByRole('button', { name: /turn off/i });
   userEvent.click(turnOffButton);

   await waitFor(async () => {
      const status = await screen.findAllByText('OFFLINE');
      expect(status).toHaveLength(2);
      expect(turnOffButton).not.toBeInTheDocument()
   });

   userEvent.click(virginiaServerMore);
   const turnOnButton = screen.getByRole('button', { name: /turn on/i });
   userEvent.click(turnOnButton);

   await waitFor(async () => {
      const status = await screen.findAllByText('ONLINE');
      expect(status).toHaveLength(2);
      expect(turnOnButton).not.toBeInTheDocument()
   }, { timeout: 1000 });

});

test('search input functionality', async () => {
   render(<ServersList />)
   const searchInput = await screen.findByPlaceholderText('Search');
   expect(searchInput).toBeInTheDocument();

   const serversList = await screen.findAllByRole('listitem');
   expect(serversList).toHaveLength(3);

   const ohioServer = screen.getByRole('heading', { name: 'US East (Ohio)' });
   expect(ohioServer).toBeInTheDocument();

   userEvent.clear(searchInput);
   userEvent.type(searchInput, 'v');
   expect(ohioServer).not.toBeInTheDocument();

   userEvent.clear(searchInput);
   expect(screen.getByRole('heading', { name: 'US East (Ohio)' })).toBeInTheDocument();
});