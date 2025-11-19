import '@testing-library/jest-dom';

// Mock CSS imports
jest.mock('*.css', () => ({}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));
