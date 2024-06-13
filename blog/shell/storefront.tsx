import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@bit-bazaar/blog.navbar';
import { Blog } from '@bit-bazaar/blog.blog';

export function Storefront() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Navbar />
            <Blog />
          </main>
        }
      />
    </Routes>
  );
}
