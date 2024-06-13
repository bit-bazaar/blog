import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar.js';

export function Storefront() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Navbar />
            <h1>Store</h1>
          </main>
        }
      />
    </Routes>
  );
}
