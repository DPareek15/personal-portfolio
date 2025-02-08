import React, { JSX } from 'react';
import {
  AspectRatio,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
  Group,
  ActionIcon,
  Spoiler,
  Badge,
} from '@mantine/core';
import classes from './ProjectCards.module.css';
import Link from 'next/link';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  visitLink?: string;
  tags?: string[];
}

interface ProjectCardProps {
  index: number;
}

const data: Project[][] = [
  [
    {
      title: 'Movie Recommender System',
      image:
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        "This project recommends movies similar to the user's choice. It uses stemming and vectorization of relevant features of a movie, such as plot, actors, director, etc. to find similar movies. The dataset used contains almost 5000 movies and the movie posters and metadata is collected from OMDB.",
      link: 'https://github.com/DPareek15/movie_recommendation_system',
      visitLink: 'https://movie-recommendation-system-dp.streamlit.app/',
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit'],
    },
    {
      title: 'Share Price Predictor',
      image:
        'https://images.unsplash.com/photo-1648275913341-7973ae7bc9b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'This project aims to predict the stock price of a variety of companies. It uses a Long Short Term Memory Model to predict the future price of a company. The model is trained on data from 2000 to till date and is able to predict the future price of most companies with a high accuracy.',
      link: 'https://github.com/DPareek15/share-price-predictor',
      visitLink: 'https://share-price-predictor.streamlit.app/',
      tags: ['Python', 'PyTorch', 'Pandas', 'Streamlit'],
    },
    {
      title: 'Student Performance Predictor',
      image:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'This project aims to predict the academic performance of a student based on their previous academic record. It contains machine learning pipelines created using Python and uses models from the Scikit-Learn library.',
      link: 'https://github.com/DPareek15/ml-project',
      tags: ['Python', 'Flask', 'Pandas', 'Scikit-Learn'],
    },
    {
      title: 'MNIST Dataset Analysis',
      image:
        'https://production-media.paperswithcode.com/datasets/MNIST-0000000001-2e09631a_09liOmx.jpg',
      description:
        'This project was a college project during which a team of four students analysed the performance of different classification models on the MNIST dataset.',
      link: 'https://github.com/DPareek15/dmdw-assignment',
      tags: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    },
  ],
  [
    {
      title: 'Collaborative Text Editor',
      image:
        'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'This is a small text editor web application with collaborative typing, document sharing, interactive comments, automatic syncing and notifications. It is built with utility in mind and comes in dark mode to ensure a comfortable experience.',
      link: 'https://github.com/DPareek15/collaborative-text-editor',
      visitLink: 'https://writesync-editor.vercel.app/',
      tags: ['Next.js', 'TailwindCSS', 'Liveblocks', 'TypeScript'],
    },
    {
      title: 'Project Management App',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'This web application is aimed for small teams who are looking for a simple software to help with their management and planning. It can greatly ease the work of many teams who are currently using paid and/or outdated softwares which do not deliver as much as the teams need.',
      link: 'https://github.com/DPareek15/project-manager-app',
      tags: ['Next.js', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
    },
  ],
  [
    {
      title: 'Coming soon!',
      image:
        'https://images.unsplash.com/photo-1590479773265-7464e5d48118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Projects will be posted here very soon...',
      link: '#',
    },
  ],
];

export function ProjectCards({ index }: Readonly<ProjectCardProps>) {
  const cards: JSX.Element[] = data[index].map((article: Project) => (
    <Card key={article.title} p="md" radius="md" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image alt={article.title} src={article.image} radius="sm" />
      </AspectRatio>
      <Group justify="space-between" mt={5}>
        <Text className={classes.title}>{article.title}</Text>
        <ActionIcon.Group>
          <Link href={article.link}>
            <ActionIcon
              size="sm"
              variant="transparent"
              title="Visit GitHub"
              suppressHydrationWarning
            >
              <IconBrandGithub
                style={{ width: '100%', height: '100%' }}
                stroke={1.5}
                size={16}
                className={classes.icon}
                aria-label="Visit GitHub"
              />
            </ActionIcon>
          </Link>
          {article.visitLink && (
            <Link href={article.visitLink}>
              <ActionIcon
                size="sm"
                variant="transparent"
                title="Visit this project"
                suppressHydrationWarning
              >
                <IconExternalLink
                  style={{ width: '100%', height: '100%' }}
                  stroke={1.5}
                  size={16}
                  className={classes.icon}
                  aria-label="Visit this project"
                />
              </ActionIcon>
            </Link>
          )}
        </ActionIcon.Group>
      </Group>
      <Spoiler
        maxHeight={65}
        showLabel="Show more"
        hideLabel="Show less"
        transitionDuration={250}
        suppressHydrationWarning
      >
        <Text className={classes.title} mt="md" fw={700} c="dimmed">
          {article.description}
        </Text>
      </Spoiler>
      <Group gap="xs">
        {article.tags?.map((tag: string) => (
          <Badge key={tag} color="teal" size="md" radius="lg" ml="xs" mt="xs">
            {tag}
          </Badge>
        ))}
      </Group>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {cards}
      </SimpleGrid>
    </Container>
  );
}
