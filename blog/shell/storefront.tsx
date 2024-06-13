import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@bit-bazaar/storefront.navbar';
import { Store } from '@bit-bazaar/storefront.storefront';

export function Storefront() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Navbar />
            <Store />
          </main>
        }
      />
    </Routes>
  );
}
