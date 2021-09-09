import React from 'react';
import { render } from '@testing-library/react';
import { BookMarkButton } from '../src/';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/dom';

const mockOnChange = jest.fn();

describe('Bookmark Button', () => {
  it('Should render not clicked version of button', () => {
    const { getByTestId } = render(
      <BookMarkButton value={false} onChange={mockOnChange} />
    );
    const buttonElement = getByTestId('notClicked-button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('Should render clicked version of button', () => {
    const { getByTestId } = render(
      <BookMarkButton value={true} onChange={mockOnChange} />
    );
    const buttonElement = getByTestId('clicked-button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('Should call the change function', () => {
    const { getByTestId } = render(
      <BookMarkButton value={false} onChange={mockOnChange} />
    );
    const buttonElement = getByTestId('notClicked-button');
    fireEvent.click(buttonElement);
    expect(mockOnChange).toBeCalled();
  });
});
