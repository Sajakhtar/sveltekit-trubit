<script>
	import '../../app.css';
  import Footer from '$lib/Footer.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import Nav from '$lib/Nav.svelte'

  onMount(async () => {
    themeChange(false)
  })
</script>

<!-- <div class="container mx-auto my-4"> -->
<div class="container mx-auto">
  <Nav />
</div>

<slot />

<Footer />
