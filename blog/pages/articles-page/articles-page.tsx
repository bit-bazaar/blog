import { Typography } from '@bit-bazaar/design.typography.typography';
import { ArticleList } from '@bit-bazaar/blog.ui.article-list';

export type ArticlesPageProps = {};

export function ArticlesPage() {
  return (
    <>
      <Typography variant="h1" sx={{ marginBottom: 1 }}>
        Articles
      </Typography>
      <ArticleList />
    </>
  );
}
