<script lang="ts">
  export let data: {
    title?: string;
    description?: string;
  };

  import '$lib/styles/theme.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  {#if data.title}<title>{data.title}</title>{/if}
  {#if data.description}
    <meta name="description" content={data.description} />
  {/if}
</svelte:head>

<div
  class="min-h-screen flex flex-col bg-[hsl(var(--color-background))] text-[hsl(var(--color-text))] transition-colors duration-300 ease-in-out"
>
  <Header />
  <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <slot />
  </main>
  <Footer />
</div>
