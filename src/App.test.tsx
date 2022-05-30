import { render, screen } from '@testing-library/react';
import Tasks from './pages/tasks';

test('renders learn react link', () => {
  render(<Tasks />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
