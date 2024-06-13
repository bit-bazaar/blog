import React, { useState } from 'react';
import './blog.css';

const Blog = () => {
  const [posts] = useState<{ id: number; title: string; content: string }[]>([
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post.',
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of the second post.',
    },
    {
      id: 3,
      title: 'Third Post',
      content: 'This is the content of the third post.',
    },
  ]);

  const [selectedPost, setSelectedPost] = useState<{
    id: number;
    title: string;
    content: string;
  } | null>(null);

  const selectPost = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="blog">
      {selectedPost ? (
        <div className="blog-post-full">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={() => setSelectedPost(null)}>Back to List</button>
        </div>
      ) : (
        <div className="blog-list">
          {posts.map((post) => (
            <div
              key={post.id}
              className="blog-post"
              onClick={() => selectPost(post)}
            >
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
