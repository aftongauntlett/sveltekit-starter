<script>
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  </script>

  <nav class="w-full py-4 border-b border-line flex justify-between items-center px-4">
    <div class="flex gap-4 text-sm font-medium">
      <a href="/" class="hover:text-primary">Home</a>
      <a href="/about" class="hover:text-primary">About</a>
      <a href="/projects" class="hover:text-primary">Projects</a>
      <a href="/contact" class="hover:text-primary">Contact</a>
    </div>
    <ThemeToggle />
  </nav>
