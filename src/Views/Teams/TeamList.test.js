import { render } from '@testing-library/react';
import TeamList from './TeamList';

test('renders the teams', () => {
  const container = render(<TeamList teams={[]} />);
  expect(container).toMatchSnapshot();
});
