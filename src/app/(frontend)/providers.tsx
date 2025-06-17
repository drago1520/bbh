import { HeaderThemeProvider } from '@/components/ThemeProvider/HeaderTheme';
import { ThemeProvider } from '@/components/ThemeProvider/Theme';
import { PostHogProvider } from '@/lib/posthog-provider';
import React from 'react';

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <PostHogProvider>
      <ThemeProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ThemeProvider>
    </PostHogProvider>
  );
};
