import React, { JSX } from 'react';
import {
  Button,
  Paper,
  Text,
  Title,
  SimpleGrid,
  Container,
} from '@mantine/core';
import classes from './BlogCard.module.css';

interface BlogArticle {
  title: string;
  tag: string;
  image: string;
}

const blogData: BlogArticle[] = [
  {
    title: 'Forests to visit1',
    tag: 'Nature',
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Forests to visit2',
    tag: 'Nature',
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Forests to visit3',
    tag: 'Nature',
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Forests to visit4',
    tag: 'Nature',
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
];

export function BlogCards(): JSX.Element {
  const blogs: JSX.Element[] = blogData.map((article: BlogArticle) => (
    <Paper
      key={article.title}
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
      w={{ base: 250, sm: 450 }}
      style={
        { backgroundImage: `url(${article.image})` } as React.CSSProperties
      }
    >
      <div>
        <Text className={classes.category} size="xs">
          {article.tag}
        </Text>
        <Title order={3} className={classes.title}>
          {article.title}
        </Title>
      </div>
      <Button
        variant="white"
        color="dark"
        suppressHydrationWarning
        aria-label={`Read article: ${article.title}`}
      >
        Read article
      </Button>
    </Paper>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {blogs}
      </SimpleGrid>
    </Container>
  );
}
