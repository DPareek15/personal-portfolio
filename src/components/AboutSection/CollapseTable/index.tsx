import React, { JSX } from 'react';
import {
  Box,
  Group,
  Button,
  Collapse,
  Table,
  Avatar,
  Text,
  Progress,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export function CollapseTable({
  title,
  gradient,
  data,
}: Readonly<CollapseTableProps>): JSX.Element {
  const [opened, { toggle }] = useDisclosure();

  const table: JSX.Element[] = data.map((row: SkillRow) => {
    return (
      <Table.Tr key={row.name}>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={32} src={row.icon} radius={32} />
            <Text size="lg" c="black" fw={500}>
              {row.name}
            </Text>
          </Group>
        </Table.Td>
        {typeof row.value !== 'undefined' && (
          <Table.Td w={{ base: 150, md: 300 }}>
            <Progress
              value={row.value}
              size="lg"
              radius="md"
              aria-label={`${row.name} proficiency: ${row.value}%`}
            />
          </Table.Td>
        )}
      </Table.Tr>
    );
  });

  return (
    <Box maw={1200} mx="auto">
      <Group justify="center" mb={5}>
        <Button
          size="md"
          radius="md"
          variant="gradient"
          gradient={{ from: gradient.from, to: gradient.to, deg: gradient.deg }}
          onClick={toggle}
          justify="space-between"
          mt="xl"
          rightSection={opened ? <IconChevronUp /> : <IconChevronDown />}
          w={{ base: '100%', sm: '75%' }}
          aria-expanded={opened}
          aria-controls="skills-table"
          suppressHydrationWarning
        >
          {title}
        </Button>
      </Group>
      <Collapse in={opened} id="skills-table">
        <Table
          verticalSpacing="sm"
          withRowBorders={false}
          mt={30}
          w={{ base: '100%', sm: '75%' }}
          mx="auto"
        >
          <Table.Tbody>{table}</Table.Tbody>
        </Table>
      </Collapse>
    </Box>
  );
}
