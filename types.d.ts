// types.d.ts - Clean type declarations to avoid conflicts

// Spline Viewer custom element declaration
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
      'events-target'?: string;
      loading?: 'lazy' | 'eager';
    };
  }
}

// GSAP ScrollTrigger enhancement
declare module 'gsap/ScrollTrigger' {
  interface ScrollTrigger {
    getAll(): ScrollTrigger[];
    kill(): void;
  }
  
  namespace ScrollTrigger {
    function getAll(): ScrollTrigger[];
  }
}

// Custom element types
interface SplineViewerElement extends HTMLElement {
  url: string;
  'events-target'?: string;
}

// Window enhancements (only if needed)
declare global {
  interface Window {
    // Add any custom window properties here if needed
  }
}

export {};