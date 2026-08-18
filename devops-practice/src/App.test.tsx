import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
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
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });
});
