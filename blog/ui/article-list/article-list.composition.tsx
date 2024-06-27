import { ApolloBlogProvider } from '@lazyworks/blog.context.apollo-blog-provider';
import { ArticleList } from './article-list.js';

export const ArticleListExample = () => {
  return (
    <ApolloBlogProvider spaceId={null}>
      <ArticleList />
    </ApolloBlogProvider>
  );
};
