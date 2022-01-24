<script>
  export let error
</script>

{#if error}
  <strong class="text-error">{error.message}</strong>
{/if}
