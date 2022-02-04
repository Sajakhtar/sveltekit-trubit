<script>
	import '../../../app.css';
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(async () => {
    themeChange(false)
  })
</script>


<slot />
