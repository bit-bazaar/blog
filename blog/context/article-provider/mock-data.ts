import { gql } from '@apollo/client';
import { mockData as articles } from '@bit-bazaar/blog.entities.article';

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

export const mockData = [
  {
    request: {
      query: GET_BLOGS_QUERY,
    },
    result: {
      data: {
        getBlogPosts: articles,
      },
    },
  },
];
