import { render, screen } from '@testing-library/react';
import App from './App';

test('renders table', () => {
  render(<App />);
  const tableElement = screen.getByText(/Creditor/i);
  expect(tableElement).toBeInTheDocument();
});
