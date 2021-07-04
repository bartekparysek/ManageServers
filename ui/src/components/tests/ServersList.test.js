import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServersList from '../ServersList';

test('reboot button changes server status', async () => {
   render(<ServersList />);
   const virginiaServerMore = await screen.findByLabelText('US East (Virginia)');
   userEvent.click(virginiaServerMore);

   const onlineStatus = await screen.findByText(/online/i);
   expect(onlineStatus).toBeInTheDocument();

   const rebootButton = screen.queryByRole('button', { name: 'Reboot' });
   userEvent.click(rebootButton);

   await waitFor(() => expect(rebootButton).not.toBeInTheDocument())

   const rebootStatus = screen.getByText(/rebooting/i);
   expect(rebootStatus).toBeInTheDocument();

   await waitFor(() => expect(onlineStatus).toBeInTheDocument(), { timeout: 4000 });

});
