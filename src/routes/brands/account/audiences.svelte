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
<label>
  <input type="checkbox" bind:group={attributes.age} value="18-24">
  <span class="label-text">18-24</span>
</label>
<label>
  <input type="checkbox" bind:group={attributes.age} value="25-34">
  <span class="label-text">25-34</span>
</label>
<label>
  <input type="checkbox" bind:group={attributes.age} value="35-44">
  <span class="label-text">35-44</span>
</label>
<label>
  <input type="checkbox" bind:group={attributes.age} value="45-54">
  <span class="label-text">45-54</span>
</label>

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
