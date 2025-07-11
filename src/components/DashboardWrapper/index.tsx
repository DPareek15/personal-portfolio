'use client';

import React, { FC, JSX } from 'react';

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure, useHeadroom, useMediaQuery } from '@mantine/hooks';
import {
  IconHome,
  IconUser,
  IconDeviceLaptop,
  IconMail,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { DarkModeButton } from './DarkModeButton';
import { DownloadButton } from './DownloadButton';
import Link from 'next/link';
import { NavbarLink } from '@/data/data_items';

const data: NavbarLink[] = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/#aboutSection', label: 'About Me', icon: IconUser },
  {
    link: '/#projectsSection',
    label: 'Projects',
    icon: IconDeviceLaptop,
  },
  { link: '/#contactSection', label: 'Contact', icon: IconMail },
];

export const DashBoardWrapper: FC<DashboardProps> = ({
  children,
}: Readonly<DashboardProps>) => {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  const isMobile = useMediaQuery('(max-width: 48em)');

  const links: JSX.Element[] = data.map((item: NavbarLink) => (
    <Link className={classes.link} href={item.link} key={item.label}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <AppShell
      header={{ height: 60, collapsed: isMobile && !pinned }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { desktop: !desktopOpened },
      }}
      padding="0"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="md"
            lineSize={2}
            aria-label="Toggle navigation"
            suppressHydrationWarning
          />
          <Group>
            <DownloadButton />
            <DarkModeButton />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar visibleFrom="sm" p="md" className={classes.navbar}>
        <div className={classes.navbarMain}>{links}</div>
      </AppShell.Navbar>
      <AppShell.Main>
        <div
          suppressHydrationWarning
          className={`${
            desktopOpened ? 'w-[calc(100vw-200px)]' : 'w-screen'
          } transition-all ease-in-out `}
        >
          {children}
        </div>
      </AppShell.Main>
    </AppShell>
  );
};
