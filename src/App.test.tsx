/* eslint-disable prettier/prettier */
/// <reference types="@testing-library/jest-dom" />

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {WrappedApp, App} from './App';

describe('App', () => {
  it('Render hello World', () => {
    // Arrange
    render(<WrappedApp />);
    
    // Act
    // Assert
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello world');
  });
  it('Renders not found in invalid Path', () => {
      render(
        <MemoryRouter initialEntries={['/roman']}>
          <App/>
        </MemoryRouter>
      );
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Not Found');
  })
});
