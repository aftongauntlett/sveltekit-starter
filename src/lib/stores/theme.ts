// src/lib/stores/theme.ts
import { writable } from 'svelte/store';

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return stored ?? (prefersDark ? 'dark' : 'light');
};

export const theme = writable<'light' | 'dark'>(getInitialTheme());

if (typeof window !== 'undefined') {
  theme.subscribe((value) => {
    localStorage.setItem('theme', value);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(value);
  });
}
