import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { DashBoardWrapper } from '@/components/DashboardWrapper';
import { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Dushyant Pareek',
  description: 'A personal portfolio web application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="flex h-full w-full p-0 overflow-x-hidden">
        <MantineProvider>
          <DashBoardWrapper>{children}</DashBoardWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
