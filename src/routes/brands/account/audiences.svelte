<script>
  import SearchFilter from "$lib/SearchFilter.svelte";
  // fetch audience attributes from Supabase
    // use placeholder hardcoded array for now
  // add search filter
  // multi select
  // save to svelte store
  // attribute value multi select
  // save to svelte store
  // then save to DB

  let dataCategories = ['Gender', 'Geolocation', 'Age', 'Income bracket']
</script>

<svelte:head>
  <title>Audiences</title>
</svelte:head>

<h1 class="text-5xl mb-8">Audiences</h1>

<SearchFilter {dataCategories} />

<!-- <ul>
  {#each dataCategories as dataCategory}
  <li>{dataCategory}</li>
  {/each}
</ul> -->
