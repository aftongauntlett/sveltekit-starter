<script lang="ts">
  export let id: string = '';
  export let heading: string = '';
  export let className: string = '';
</script>

<section
  {id}
  class={`scroll-mt-20 mb-16 sm:mb-24 ${className}`}
  aria-labelledby={id ? `${id}-heading` : undefined}
>
  {#if heading}
    <h2 id={`${id}-heading`} class="subtitle mb-6 text-[hsl(var(--color-text))]">
      {heading}
    </h2>
  {/if}

  <slot />
</section>
