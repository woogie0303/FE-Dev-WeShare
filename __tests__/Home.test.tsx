import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

test('should have Docs text', () => {
  render(<Home />); // Arrange
  const myElem = screen.getByText('Docs'); // Act
  expect(myElem).toBeInTheDocument(); // ASSERT
});
