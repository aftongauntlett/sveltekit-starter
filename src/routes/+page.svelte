<script lang="ts">
  import HeroCard from '$lib/components/HeroCard.svelte';
  import Section from '$lib/components/Section.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<!-- Hero -->
<section aria-labelledby="hero-heading">
  <HeroCard name="Afton" />
</section>

<!-- About -->
<Section id="about" heading="About">
  <p class="text-body">I'm a front-end developer with a strong background in UI/UX design...</p>
</Section>

<!-- Experience -->
<Section id="experience" heading="Experience"></Section>

<!-- Projects -->
<Section id="projects" heading="Projects">
  <div class="grid gap-6 md:grid-cols-2">
    <ProjectCard title="Dataset Platform" description="A Kaggle-style site for sharing datasets." />
    <ProjectCard
      title="Chatbot UI"
      description="Customized Claude-powered chatbot with VSCode integration."
    />
  </div>
</Section>

<!-- Contact -->
<Section id="contact" heading="Contact">
  <p class="muted">
    Let's connect — reach out via <a href="/contact" class="underline">my contact form</a>.
  </p>
</Section>
