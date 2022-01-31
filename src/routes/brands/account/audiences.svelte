<script>
  // import Sidebar from '$lib/Sidebar.svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import Error from '$lib/Error.svelte'
  import { getUser, signOut } from '$lib/auth'

  // const user = getUser()
  // if (browser && !user) goto('/brands')

</script>

<p>Hello from audiences</p>
