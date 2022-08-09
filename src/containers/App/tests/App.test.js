import { render, screen } from '@testing-library/react';
import { ResumeProvider } from '../../../context/ResumeContext';
import App from '../App';

test('renders learn react link', () => {
  render(<ResumeProvider><App /></ResumeProvider>);
  
  expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
  expect(screen.getByText(/LANGUAGES/i)).toBeInTheDocument();
  expect(screen.getByText(/HOBBIES/i)).toBeInTheDocument();
  expect(screen.getByText(/EXPERIENCE/i)).toBeInTheDocument();
  expect(screen.getByText(/INTERNSHIP/i)).toBeInTheDocument();
  expect(screen.getByText(/EDUCATION/i)).toBeInTheDocument();
  expect(screen.getByText(/SKILLS/i)).toBeInTheDocument();
});
