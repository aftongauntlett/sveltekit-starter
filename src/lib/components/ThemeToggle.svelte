<script lang="ts">
  import { theme } from '$lib/stores/theme';

  function toggleTheme() {
    theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
</script>

<button
  type="button"
  on:click={toggleTheme}
  aria-label="Toggle dark mode"
  class="text-[hsl(var(--color-primary))] px-4 py-2 rounded-md hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-primary))]"
>
  Toggle Theme
</button>
