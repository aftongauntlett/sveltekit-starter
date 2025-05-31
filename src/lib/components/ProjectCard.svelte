<script lang="ts">
  export let title: string;
  export let description: string;
  export let link: string = '';
</script>

<div
  class="rounded-2xl border border-[hsl(var(--color-muted))] bg-[hsl(var(--color-background))] p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
>
  <h3 class="title mb-2 text-[hsl(var(--color-text))]">{title}</h3>
  <p class="muted mb-4">{description}</p>

  {#if link}
    <a
      href={link}
      class="inline-block text-sm font-medium text-[hsl(var(--color-primary))] underline underline-offset-4 hover:opacity-80 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project →
    </a>
  {/if}
</div>
