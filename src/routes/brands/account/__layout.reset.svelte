<script>
  import Sidebar from '$lib/Sidebar.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'


  onMount(async () => {
    themeChange(false)
  })
</script>


<Sidebar />
