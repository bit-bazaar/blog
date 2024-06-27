import { MemoryRouter } from 'react-router-dom';
import { Blog } from './blog.js';

export const BlogBasic = () => {
  return (
    <MemoryRouter>
      <Blog />
    </MemoryRouter>
  );
};
