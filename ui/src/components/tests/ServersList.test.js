import React from 'react';
import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServersList from '../ServersList';

test('check if on click rebooting it changes server status', async () => {
   render(<ServersList />);
   const virginiaServerMore = await screen.findByLabelText('US East (Virginia)');
   userEvent.click(virginiaServerMore);

   const dropdown = screen.getByText('Reboot');
   // const rebootButton = screen.queryByRole('button', { name: 'Reboot' });
   expect(dropdown).toBeInTheDocument();

});
