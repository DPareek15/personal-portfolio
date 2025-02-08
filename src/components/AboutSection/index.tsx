'use client';

import { Container, Title, Text } from '@mantine/core';
import React, { FC } from 'react';
import classes from './AboutSection.module.css';
import { CollapseTable } from './CollapseTable';
import { languages, libraries, tools } from '@/data/data_items';

export const AboutSection: FC = () => {
  return (
    <Container
      fluid
      px={{ base: 'lg', sm: '10%', md: '15%' }}
      className={`${classes.wrapper} section`}
      id="aboutSection"
    >
      <Title ta="left" c="black" className={classes.title}>
        About Me
      </Title>
      <Text ta="left" c="black" size="lg" mb="lg">
        I am a student of National Institute of Technology (NIT) Agartala,
        current pursuing my Master&apos;s degree in Computer Applications. I
        enjoy learning new things and applying them to real-world problems. I am
        passionate about applying Machine Learning solutions to business
        problems. I also create responsive and accessible web applications using
        the MERN stack.
      </Text>
      <CollapseTable
        title="Programming Languages"
        gradient={{ from: 'grape', to: 'violet', deg: 90 }}
        data={languages}
      />
      <CollapseTable
        title="Frameworks/Libraries"
        gradient={{ from: 'violet', to: 'cyan', deg: 90 }}
        data={libraries}
      />
      <CollapseTable
        title="Tools"
        gradient={{ from: 'cyan', to: 'teal', deg: 90 }}
        data={tools}
      />
    </Container>
  );
};
