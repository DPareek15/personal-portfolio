import { IconDownload } from '@tabler/icons-react';
import { Group, ActionIcon, Tooltip } from '@mantine/core';
import React, { FC } from 'react';
import Link from 'next/link';

export const DownloadButton: FC = () => {
  return (
    <Group justify="center">
      <Tooltip label="Download Resume">
        <Link
          href={'/Resume___Dushyant_Pareek.pdf'}
          hrefLang="en"
          target="_blank"
          rel="noopener noreferrer"
          download={true}
        >
          <ActionIcon
            variant="default"
            size="xl"
            aria-label="Download Resume"
            suppressHydrationWarning
          >
            <IconDownload className="w-[22px] h-[22px]" stroke={1.5} />
          </ActionIcon>
        </Link>
      </Tooltip>
    </Group>
  );
};
