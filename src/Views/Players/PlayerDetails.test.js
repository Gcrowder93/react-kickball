import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Players from '../../Components/PlayerFunction/Players';

test('renders the players details', () => {
  const container = render(
    <MemoryRouter>
      <Players
        player={{
          position: 'Pitcher',
          name: 'Bennie Jetts',
          team_id: '1',
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
