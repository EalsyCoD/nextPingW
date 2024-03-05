import type { Metadata } from 'next';
import StyledComponentsRegistry from './registry';
import { ErrorBoundary } from '@/components/error-boundary/error-boundary';

export const metadata: Metadata = {
  title: 'PingWin',
  description: 'PingWin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ErrorBoundary>
          <body>{children}</body>
        </ErrorBoundary>
      </StyledComponentsRegistry>
    </html>
  );
}
