<script>
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import { getUser } from '$lib/auth'

  const user = getUser()
  if (browser && user) goto('/brands/account')
</script>

<p>Hello from account homebase</p>
