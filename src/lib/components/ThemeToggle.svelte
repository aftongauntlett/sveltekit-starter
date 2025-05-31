<script lang="ts">
  import { theme } from '$lib/stores/theme';

  function toggleTheme() {
    theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
</script>

<button on:click={toggleTheme} class="text-primary px-4 py-2 rounded-md"> Toggle Theme </button>
