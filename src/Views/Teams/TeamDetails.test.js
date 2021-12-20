import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from '../../Components/TeamFunction/Teams';

test('renders the team details', () => {
  const container = render(
    <MemoryRouter>
      <Teams
        team={{
          city: 'Vancouver',
          state: 'WA',
          id: '5',
          name: 'Vancougers',
          players: [{ name: 'Gary Coolman' }],
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
