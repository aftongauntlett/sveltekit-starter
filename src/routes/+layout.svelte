<script lang="ts">
  export let data: {
    navLayout: 'top' | 'side';
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
  class="min-h-screen flex bg-[hsl(var(--color-background))] text-[hsl(var(--color-text))] transition-colors duration-300 ease-in-out"
>
  {#if data.navLayout === 'side'}
    <aside class="w-64 p-4 border-r border-[hsl(var(--color-primary))]">
      <Header />
    </aside>
    <div class="flex flex-col flex-1">
      <main class="flex-1 max-w-7xl mx-auto px-4 py-10">
        <slot />
      </main>
      <Footer />
    </div>
  {:else}
    <div class="flex flex-col w-full">
      <Header />
      <main class="flex-1 max-w-7xl mx-auto px-4 py-10">
        <slot />
      </main>
      <Footer />
    </div>
  {/if}
</div>
