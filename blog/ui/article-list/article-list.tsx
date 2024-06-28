import { useArticles } from '@bit-bazaar/blog.hooks.use-articles';
import type { Article } from '@bit-bazaar/blog.entities.article';
import {
  Card,
  CardHeader,
  // CardContent,
} from '@bit-bazaar/design.surfaces.card';
import { IconButton } from '@bit-bazaar/design.actions.icon-button';
import { Typography } from '@bit-bazaar/design.typography.typography';
import { Avatar, stringAvatar } from '@bit-bazaar/design.data-display.avatar';
import { MoreVert } from '@mui/icons-material';

export const ArticleList = () => {
  const { articles, loading, error } = useArticles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs: {error.message}</p>;

  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {articles &&
        articles.map((article: Article) => (
          <Card key={article.slug} component="li" sx={{ marginBottom: 1 }}>
            {/* @ts-ignore */}
            <CardHeader
              avatar={
                <Avatar
                  variant="rounded"
                  {...stringAvatar(article.author.name)}
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={<Typography variant="h6">{article.title}</Typography>}
              subheader={`by ${article.author.name}`}
            />
          </Card>
        ))}
    </ul>
  );
};
