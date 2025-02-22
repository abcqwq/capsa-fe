import '@/app/globals.css';
import GlobalStyles from '@/styled-component-registry/global-styles';
import StyledComponentsRegistry from '@/styled-component-registry/registry';

import { Funnel_Display } from 'next/font/google';
import { LIGHT_COLORS } from '@/const/COLORS';
import type { Metadata } from 'next';

const defaultFont = Funnel_Display({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'capsa-susun',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={LIGHT_COLORS as React.CSSProperties}>
      <body className={defaultFont.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
