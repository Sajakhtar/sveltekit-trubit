<script>
  import Hero from '$lib/Hero.svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import { getUser } from '$lib/auth'

  const user = getUser()
  if (browser && user) goto('/brands/account')
</script>

<!-- <h1>TRUBIT</h1> -->

<svelte:head>
  <title>TRUBIT</title>
</svelte:head>

<Hero />
