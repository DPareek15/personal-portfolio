'use client';

import { Container, SegmentedControl, Stack, Title } from '@mantine/core';
import React, { FC, useState } from 'react';
import classes from './ProjectsSection.module.css';
import { ProjectCards } from './ProjectCards';
import { projectItems } from '@/data/data_items';

export const ProjectsSection: FC = () => {
  const [value, setValue] = useState<string>('0');

  return (
    <Container
      fluid
      className={`${classes.wrapper} section`}
      id="projectsSection"
    >
      <Stack justify="center" align="center" gap="md">
        <Title ta="center" c="white" className={classes.title}>
          Projects
        </Title>
        <SegmentedControl
          w={{ base: '100%', sm: '80%', md: '60%' }}
          withItemsBorders={false}
          size="md"
          radius="sm"
          color="teal"
          my="auto"
          value={value}
          onChange={setValue}
          data={projectItems}
          suppressHydrationWarning
        />
        <ProjectCards index={Number(value)} />
      </Stack>
    </Container>
  );
};
