"use client";

import { Theme } from '@radix-ui/themes';
import { AuthProvider } from './authContext';

export function Providers({ children }) {
  return (
    <AuthProvider>
      <Theme>
        {children}
      </Theme>
    </AuthProvider>
  );
}
