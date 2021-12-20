import { render } from '@testing-library/react';
import PlayerList from './PlayerList';

test('renders the players', () => {
  const container = render(<PlayerList players={[]} />);
  expect(container).toMatchSnapshot();
});
