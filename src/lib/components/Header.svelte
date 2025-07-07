<script>
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<nav
  aria-label="Main navigation"
  class="w-full py-4 border-b border-secondary flex justify-between items-center px-4"
>
  <div class="flex gap-4 text-sm font-medium">
    <a href="/" use:prefetch class="hover:text-primary">Home</a>
    <a href="/about" use:prefetch class="hover:text-primary">About</a>
    <a href="/projects" use:prefetch class="hover:text-primary">Projects</a>
    <a href="/contact" use:prefetch class="hover:text-primary">Contact</a>
  </div>
  <ThemeToggle />
</nav>
