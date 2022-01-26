<script>
	import '../../app.css';
  import Footer from '$lib/Footer.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(async () => {
    themeChange(false)
  })
</script>

<slot />

<Footer />
