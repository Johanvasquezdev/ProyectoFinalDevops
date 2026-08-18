import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

// Mock matchMedia for Swiper/GSAP
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('DevOps App Tests', () => {
  it('renders the Hero component with the correct title', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /Práctica Final DevOps/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the Timeline component and DevOps concepts', () => {
    render(<App />);
    const timelineHeading = screen.getByRole('heading', { name: /Línea de Tiempo DevOps/i });
    expect(timelineHeading).toBeInTheDocument();

    // Check if tools are rendered
    expect(screen.getByText('Git & GitHub')).toBeInTheDocument();
    expect(screen.getAllByText('Docker')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Kubernetes')[0]).toBeInTheDocument();
  });
});
