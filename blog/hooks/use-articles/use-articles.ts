import { useQuery, gql } from '@apollo/client';
import { Article, type PlainArticle } from '@bit-bazaar/blog.entities.article';

const GET_BLOGS_QUERY = gql`
  query GetBlogs {
    getBlogPosts {
      title
      category
      slug
      author {
        name
      }
    }
  }
`;

export const useArticles = () => {
  const { data, loading, error } = useQuery(GET_BLOGS_QUERY);
  const articles = data?.getBlogPosts.map((article: PlainArticle) =>
    Article.from(article)
  );

  return {
    articles,
    loading,
    error,
  };
};
