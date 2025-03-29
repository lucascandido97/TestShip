import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../../components/LandingPage';

describe('LandingPage', () => {
  test('renders landing page with correct content', () => {
    render(<LandingPage />);
    const headingElement = screen.getByText(/Welcome to My Portfolio/i);
    expect(headingElement).toBeInTheDocument();
    
    const linkedinElement = screen.getByText(/LinkedIn/i);
    expect(linkedinElement).toBeInTheDocument();
    
    const githubElement = screen.getByText(/GitHub/i);
    expect(githubElement).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<LandingPage />);
    const contactInfoElement = screen.getByText(/Contact me at/i);
    expect(contactInfoElement).toBeInTheDocument();
  });
});