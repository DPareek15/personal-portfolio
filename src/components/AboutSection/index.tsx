'use client';

import { Container, Title, Text } from '@mantine/core';
import React, { FC } from 'react';
import classes from './AboutSection.module.css';
import { CollapseTable } from './CollapseTable';

export interface SkillItem {
  icon: string;
  name: string;
}

export interface RatedSkillItem extends SkillItem {
  value: number;
}

const languages: RatedSkillItem[] = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    name: 'Python',
    value: 75,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    name: 'JavaScript',
    value: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    name: 'TypeScript',
    value: 70,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    name: 'Java',
    value: 70,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    name: 'C',
    value: 85,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    name: 'SQL/NoSQL',
    value: 75,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    name: 'HTML/CSS',
    value: 90,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg',
    name: 'LaTeX',
    value: 50,
  },
];

const libraries: RatedSkillItem[] = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
    name: 'Scikit-Learn',
    value: 75,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
    name: 'PyTorch',
    value: 60,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    name: 'TensorFlow/Keras',
    value: 60,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
    name: 'Pandas',
    value: 70,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
    name: 'NumPy',
    value: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
    name: 'MatPlotlib',
    value: 65,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    name: 'Next.js',
    value: 70,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    name: 'React.js',
    value: 70,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    name: 'Node.js/Express.js',
    value: 70,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    name: 'FastAPI/Flask',
    value: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg',
    name: 'Streamlit',
    value: 80,
  },
];

const tools: SkillItem[] = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    name: 'Git',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    name: 'Docker',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'Amazon Web Services',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    name: 'Visual Studio Code',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
    name: 'Jupyter',
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg',
    name: 'Google Colab',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg',
    name: 'PyCharm',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg',
    name: 'IntelliJ',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    name: 'Postman',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
    name: 'Canva',
  },
];

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
