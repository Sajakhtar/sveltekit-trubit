<script>
  import Sidebar from '$lib/Sidebar.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import Error from '$lib/Error.svelte'
  import { getUser } from '$lib/auth'

  // const user = getUser()
  // if (browser && !user) goto('/brands')


  onMount(async () => {
    themeChange(false)
  })
</script>


<Sidebar>
  <slot />
</Sidebar>
