<script>
  import SearchFilter from "$lib/SearchFilter.svelte";

  export let search = ""

  let dataCategories = ['Gender', 'Geolocation', 'Age', 'Income bracket', 'Interests', 'Affinities']

  // turn into JSON level 1 cat, level 2 attr
  // remove ul menu
  // ul > li > collapse > attr with checkbox (onCheck save Cat and attr)

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

<SearchFilter {dataCategories} bind:search />

<h3 class="text-xl my-4"> Audience Definition</h3>
<p><em>add selected audience attributes</em></p>

{#if search}
  <p class="my-2 text-secondary">{search}</p>
{/if}

<!--  onClick: save to DB -->
<button class="btn btn-sm btn-accent w-20">Save</button>

<h3 class="text-2xl my-4">Saved audiences</h3>
<p><em>add a table component here</em></p>
