import { writable } from 'svelte/store';

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
const defaultTheme = stored || 'light';

export const theme = writable(defaultTheme);

theme.subscribe((value) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(value);
    localStorage.setItem('theme', value);
  }
});
