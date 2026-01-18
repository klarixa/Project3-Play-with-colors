<script>
  import { dev } from '$app/environment';
</script>

<slot />

{#if dev}
  <style>
    :global(*) {
      box-sizing: border-box;
    }
  </style>
{/if}