import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const basic = screen.getByTestId("basic");
  const linkElement2 = screen.getByText("Learn React with Anurag");
  expect(linkElement2).toBeInTheDocument();
  expect(basic).toHaveTextContent("1");
});
