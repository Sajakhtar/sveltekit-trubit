<script>
  import { fade } from 'svelte/transition'
  import { authenticate } from '$lib/stacks-auth';
</script>

<svelte:head>
  <title>Consumers</title>
</svelte:head>

<div class="hero min-h-screen" transition:fade>
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">
            TRUBIT Wallet
          </h1>
      <p class="mb-5">
            Take ownership of your data and earn bitcoin.
          </p>
      <button on:click={() => authenticate()} class="btn btn-primary">Connect wallet</button>
    </div>
  </div>
</div>
