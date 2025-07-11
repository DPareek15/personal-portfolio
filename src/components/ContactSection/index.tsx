'use client';

import { IconAt, IconPhone, IconSchool } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Box,
  Container,
} from '@mantine/core';
import classes from './ContactSection.module.css';
import React, { FC, JSX, useState } from 'react';
import Link from 'next/link';
import { SocialLink, socials } from '@/data/data_items';
import { Notification } from './Notifications';

export const ContactSection: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const icons: JSX.Element[] = socials.map((social: SocialLink) => (
    <Link href={social.link} key={social.link}>
      <ActionIcon
        key={social.link}
        size={28}
        className={classes.social}
        variant="transparent"
        suppressHydrationWarning={true}
        styles={{ root: { '--ai-hover-color': 'black' } }}
      >
        <social.icon size={22} stroke={1.5} />
      </ActionIcon>
    </Link>
  ));

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const data: FormDataType = {
      name,
      email,
      message,
    };

    try {
      Notification.showLoading(
        'Sending message',
        'Your message is being sent. Please wait...'
      );
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          Notification.showSuccess(
            'Message sent',
            'Your message has been sent successfully.'
          );
        } else {
          Notification.showFailure(
            'Message not sent',
            'Your message could not be sent. Please try again.'
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      fluid
      px={{ base: 'lg', md: '15%' }}
      className={`${classes.wrapper} section`}
      id="contactSection"
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
        <div>
          <Title className={classes.title} my="xl">
            Contact me
          </Title>
          <Stack>
            <div className={classes.contacts}>
              <Box mr="md">
                <IconAt size={24} />
              </Box>
              <div>
                <Text size="xs" className={classes.value}>
                  Email
                </Text>
                <Text className={classes.description}>
                  dushyant.pareek.2002@gmail.com
                </Text>
              </div>
            </div>
            <div className={classes.contacts}>
              <Box mr="md">
                <IconPhone size={24} />
              </Box>
              <div>
                <Text size="xs" className={classes.value}>
                  Phone
                </Text>
                <Text className={classes.description}>+91 83027 76583</Text>
              </div>
            </div>
            <div className={classes.contacts}>
              <Box mr="md">
                <IconSchool size={24} />
              </Box>
              <div>
                <Text size="xs" className={classes.value}>
                  Institution
                </Text>
                <Text className={classes.description}>
                  National Institute of Technology, <br />
                  Agartala, Tripura, India
                </Text>
              </div>
            </div>
          </Stack>
          <Group mt="xl">{icons}</Group>
        </div>
        <form id="contact-form" autoComplete="on" onSubmit={handleSubmit}>
          <div className={classes.form}>
            <TextInput
              withAsterisk
              label="Email"
              name="email"
              id="email"
              placeholder="your@email.com"
              suppressHydrationWarning
              classNames={{ input: classes.input, label: classes.inputLabel }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setEmail(event.target.value)
              }
              autoComplete="home email"
            />
            <TextInput
              label="Name"
              name="name"
              id="name"
              placeholder="Your Name"
              mt="md"
              suppressHydrationWarning
              classNames={{ input: classes.input, label: classes.inputLabel }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setName(event.target.value)
              }
              autoComplete="name"
            />
            <Textarea
              withAsterisk
              label="Your message"
              name="message"
              id="message"
              placeholder="Enter your message here"
              minRows={4}
              mt="md"
              suppressHydrationWarning
              classNames={{ input: classes.input, label: classes.inputLabel }}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
                setMessage(event.target.value)
              }
              autoComplete="message"
            />
            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                className={classes.control}
                suppressHydrationWarning
              >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </SimpleGrid>
    </Container>
  );
};
