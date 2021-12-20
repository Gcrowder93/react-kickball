import { render } from '@testing-library/react';
import TeamList from './TeamList';

test('renders the teams name', () => {
  const Vancougers = {
    name: 'Vancougers',
    id: 1,
  };
  const container = render(<TeamList team={[Vancougers]} />);
  expect(container).toMatchSnapshot();
});
