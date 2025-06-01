// src/lib/stores/theme.ts
import { writable } from 'svelte/store';

// Get system preference on first load
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
const initial = stored ?? (prefersDark ? 'dark' : 'light');

export const theme = writable<'light' | 'dark'>(initial);

// Persist to localStorage and update <html class>
theme.subscribe((value) => {
  localStorage.setItem('theme', value);
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(value);
});
