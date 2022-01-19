<script context="module">
  export const load = async ({ fetch, params }) => {
    const {slug} = params
    const res = await fetch(`/pages/${slug}.json`)
    if (res.ok) {
      const { page } = await res.json()
      return {
        props: {
          page
        }
      }
    }
  }
</script>


<script>
  export let page
</script>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

<main class="container max-w-xl mx-auto px-4">
  <article div class="prose">
    <!-- Tailwind typography Prose styles the content  -->
    {@html page.content.html}
  </article>
</main>
