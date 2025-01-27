import React, { FC } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Group,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

export const DarkModeButton: FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center">
      <Tooltip
        label={computedColorScheme === 'light' ? 'Dark Mode' : 'Light Mode'}
      >
        <ActionIcon
          onClick={(): void =>
            setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
          }
          variant="default"
          size="xl"
          aria-label={
            computedColorScheme === 'light' ? 'Dark Mode' : 'Light Mode'
          }
          suppressHydrationWarning
        >
          {computedColorScheme === 'dark' ? (
            <IconSun
              className="w-[22px] h-[22px]"
              color="white"
              stroke={1.5}
              aria-hidden="true"
            />
          ) : (
            <IconMoon
              className="w-[22px] h-[22px]"
              color="black"
              stroke={1.5}
              aria-hidden="true"
            />
          )}
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};
