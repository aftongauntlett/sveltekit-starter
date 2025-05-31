<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';

  export let animationData: any;
  export let loop: boolean = true;
  export let autoplay: boolean = true;
  export let className: string = '';

  let container: HTMLDivElement;

  onMount(() => {
    const anim = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop,
      autoplay,
      animationData,
    });

    return () => anim.destroy();
  });
</script>

<div bind:this={container} class={className}></div>
