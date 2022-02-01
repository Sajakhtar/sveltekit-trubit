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

  // let data = {
  //   Gender: ['male', 'female', ]
  // }

</script>

<svelte:head>
  <title>Audiences</title>
</svelte:head>

<h1 class="text-5xl mb-8">Audiences</h1>

<h2 class="text-2xl my-4">Create Audience</h2>

<div class="form-control">
  <label class="label">
    <span class="label-text">Audience Name</span>
  </label>
  <input type="text" placeholder="Audience" required class="input input-bordered">
</div>

<SearchFilter {dataCategories} />

<h3 class="text-xl my-4"> Audience Definition</h3>
<p><em>add selected audience attributes</em></p>


<button class="btn btn-sm btn-accent w-20">Save</button>

<h3 class="text-2xl my-4">Saved audiences</h3>
<p><em>add a table component here</em></p>
