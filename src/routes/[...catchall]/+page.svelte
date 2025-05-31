<script lang="ts">
  import Lottie from '$lib/components/Lottie.svelte';
  import animationData from '$lib/lottie/404.json';
</script>

<section class="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
  <!-- Pulsing blob (dark mode only) -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
    <div
      class="hidden dark:block w-[28rem] h-[28rem] rounded-full blur-[100px] animate-pulse-slow bg-[hsl(var(--color-primary)_/_0.6)]"
    ></div>
  </div>
  <!-- Foreground content wrapper -->
  <div class="relative z-10 flex flex-col items-center">
    <div class="max-w-md w-full h-auto">
      <Lottie {animationData} />
    </div>

    <h1 id="hero-heading" class="title mt-3 mb-6 text-black">Page not found</h1>
    <p class="mt-2 subtitle">The page you're looking for doesn't exist or was moved.</p>
    <a
      href="/"
      class="mt-6 inline-flex items-center gap-1 px-3 py-1 border rounded-md text-sm cursor-pointer transition-colors border-[hsl(var(--color-secondary))] text-[hsl(var(--color-text))] hover:bg-[hsl(var(--color-background))] hover:border-[hsl(var(--color-primary))] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      Back to Home
    </a>
  </div>
</section>
