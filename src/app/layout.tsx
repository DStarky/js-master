import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import QueryClientProvider from './QueryClientProvider';
import './globals.css';
import AuthProvider from '@/auth/Provider';
import { NavBar } from '@/components';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className={inter.className}>
        <AuthProvider>
          <QueryClientProvider>
            <Theme
              accentColor="purple"
              scaling="110%"
            >
              <header>
                <NavBar />
              </header>
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </QueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
