import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Blog } from './blog.js';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  </StrictMode>
);
