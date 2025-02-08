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
import { blogData } from '@/data/data_items';

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
