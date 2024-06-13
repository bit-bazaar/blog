import { MemoryRouter } from 'react-router-dom';
import { Storefront } from "./storefront.js";
    
export const StorefrontBasic = () => {
  return (
    <MemoryRouter>
      <Storefront />
    </MemoryRouter>
  );
}