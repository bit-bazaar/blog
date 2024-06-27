import { Routes, Route } from 'react-router-dom';
import { ArticlesPage } from '@bit-bazaar/blog.pages.articles-page';
import { CategoriesPage } from '@bit-bazaar/blog.pages.categories-page';

export function Blog() {
  return (
    <div id="blog">
      <Routes>
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}
