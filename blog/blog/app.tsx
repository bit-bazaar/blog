import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function Blog() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <h1>Store</h1>
          </main>
        }
      />
    </Routes>
  );
}
