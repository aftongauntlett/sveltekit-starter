<script lang="ts">
  export let name: string = 'hero-title';
</script>

<div
  class="p-8 mx-auto max-w-xl rounded-2xl shadow-lg space-y-6 bg-[hsl(var(--color-background))] text-[hsl(var(--color-text))]"
>
  <header class="space-y-2">
    <h1 class="hero-title text-primary">{name}</h1>
    <p class="hero-subtitle">This is a hero-subtitle example with secondary color.</p>
  </header>

  <hr class="border-t border-[hsl(var(--color-muted))]" />

  <section class="space-y-2">
    <h2 class="title text-primary">Title Heading</h2>
    <p class="subtitle">Subtitle text demonstrating a supporting label style.</p>
    <p class="text-body">
      This is a standard body paragraph. It uses the base font size and color.
    </p>
    <p class="muted">Muted text for less important or secondary information.</p>
  </section>

  <hr class="border-t border-[hsl(var(--color-muted))]" />

  <footer class="space-y-1">
    <div class="title">.title on a &lt;div&gt;</div>
    <div class="subtitle">.subtitle on a &lt;div&gt;</div>
    <div class="muted">.muted on a &lt;div&gt;</div>
  </footer>
</div>
