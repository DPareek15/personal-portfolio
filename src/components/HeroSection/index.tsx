import React, { FC } from 'react';
import { ActionIcon, Container, Overlay, Text, Title } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import classes from './HeroSection.module.css';
import Link from 'next/link';

export const HeroSection: FC = () => {
  return (
    <div className={`${classes.hero} section`} id="heroSection">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Welcome!</Title>
        <Text className={classes.description} size="xl" mt="xl">
          My name is Dushyant Pareek and I am a Computer Science student,
          currently working on Machine Learning, Web Development and Data
          Science.
        </Text>
        <Link href="#aboutSection">
          <ActionIcon
            variant="outline"
            color="white"
            size="xl"
            radius="xl"
            mt="xl"
            suppressHydrationWarning={true}
          >
            <IconArrowDown className="w-[22px] h-[22px]" stroke={1.5} />
          </ActionIcon>
        </Link>
      </Container>
    </div>
  );
};
