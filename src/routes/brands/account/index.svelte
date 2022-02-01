<script>
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import { getUser } from '$lib/auth'

  const user = getUser()
  if (browser && user) goto('/brands/account')
</script>

<svelte:head>
  <title>Homebase</title>
</svelte:head>

<h1 class="text-5xl mb-8">Homebase</h1>
