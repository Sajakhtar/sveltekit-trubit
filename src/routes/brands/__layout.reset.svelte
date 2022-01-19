<script>
	import '../../app.css';
  import Footer from '$lib/Footer.svelte'
  import Nav from '$lib/Nav.svelte'
</script>

<div class="container mx-auto my-4">
  <Nav />
</div>

<slot />

<Footer />
