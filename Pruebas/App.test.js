import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the sum result correctly', () => {
  const { getByText } = render(<App />);
  const sumResult = getByText('El resultado de la suma es: 5');
  expect(sumResult).toBeInTheDocument();
});