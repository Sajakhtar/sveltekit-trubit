<script>
	import '../../app.css';
  import Footer from '$lib/Footer.svelte'
  import Nav from '$lib/Nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(async () => {
    themeChange(false)
  })
</script>

<!-- <div class="container mx-auto my-4">
  <Nav />
</div> -->

<slot />

<Footer />
