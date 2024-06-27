import { Routes, Route } from 'react-router-dom';
import { ArticlesPage } from '@bit-bazaar/blog.pages.articles-page';
import { CategoriesPage } from '@bit-bazaar/blog.pages.categories-page';
import { ArticleProvider } from '@bit-bazaar/blog.context.article-provider';
import { Container } from '@bit-bazaar/design.layout.container';

export function Blog() {
  return (
    <ArticleProvider>
      <Container maxWidth="md">
        <Routes>
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Routes>
      </Container>
    </ArticleProvider>
  );
}
