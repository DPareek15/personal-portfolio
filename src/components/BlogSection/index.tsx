import { Container, Stack, Title } from '@mantine/core';
import React, { FC } from 'react';
import classes from './BlogSection.module.css';
import { BlogCards } from './BlogCards';

export const BlogSection: FC = () => {
  return (
    <Container
      fluid
      className={`${classes.wrapper} section`}
      id="blogSection"
      role="container"
      aria-label="blog-section"
    >
      <Stack justify="center" align="center" gap="md">
        <Title ta="left" c="black" className={classes.title}>
          From the Blog
        </Title>
        <BlogCards />
      </Stack>
    </Container>
  );
};
