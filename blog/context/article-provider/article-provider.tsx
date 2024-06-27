import type { ReactNode } from 'react';
import { MockedProvider } from '@apollo/client/testing/index.js';
import { mockData } from './mock-data.js';

export type ArticleProviderProps = {
  children: ReactNode;
};

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  return (
    <MockedProvider mocks={mockData} addTypename={false}>
      {children}
    </MockedProvider>
  );
};
