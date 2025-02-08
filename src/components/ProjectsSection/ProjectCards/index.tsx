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
import { projectData } from '@/data/data_items';

export function ProjectCards({ index }: Readonly<ProjectCardProps>) {
  const cards: JSX.Element[] = projectData[index].map((article: Project) => (
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
