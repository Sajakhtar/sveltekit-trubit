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

  let categories = {
    age: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+']
  }


  let attributes = {
    age: [],
  }

  // let attributes = []

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
<button class="btn btn-sm btn-accent w-20 my-4">Save</button>

<h3 class="text-2xl my-4">Saved audiences</h3>
<p><em>add a table component here</em></p>



<hr/>
<h3 class="text-2xl my-4">Experiments</h3>
<h3 class="text-xl my-4">Select Attributes</h3>

{#each categories.age as age}
  <label>
    <input type="checkbox" bind:group={attributes.age} value={age}>
    <span class="label-text">{age}</span>
  </label>
{/each}

<hr/>
<h3 class="text-xl my-4">Chosen Attributes</h3>


  <ul>
    <span class="label-text">Ages:</span>
    {#each attributes.age as attribute}
    <li>
      <input type="checkbox" bind:group={attributes.age} value={attribute}>
      {attribute}
    </li>
    {/each}
  </ul>
