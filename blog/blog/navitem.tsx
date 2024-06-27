import type { NavItem } from '@bit-bazaar/shell-app.types.navigation';

export const blogNavItems: NavItem = {
  label: 'Blog',
  path: '/',
  children: [
    {
      label: 'Articles',
      path: '/articles',
    },
    {
      label: 'Categories',
      path: '/categories',
    },
  ],
};

export default blogNavItems;
