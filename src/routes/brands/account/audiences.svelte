<script>
  // import SearchFilter from "$lib/SearchFilter.svelte";
  import AudienceFilter from "$lib/AudienceFilter.svelte";

  // export let search = ""
  // export let isFocused = false

  export let searchCategory = ""
  export let searchAttribute = ""
  export let attributes = {}

  // let dataCategories = ['Gender', 'Geolocation', 'Age', 'Income bracket', 'Interests', 'Affinities']

  // https://support.google.com/displayvideo/answer/6021489?hl=en#zippy=%2Cavailable-affinity-audiences-in-display-video
  let data = {
    Gender: ['Male', 'Female'],
    Age: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    Geolocation: ['Richmond', 'Chicago', 'Miami', 'Dubai'],
    Income: ['less than $50k per annum', '$50k-$74k per annum', '$75k-$100k per annum', '$100k+ per annum', 'High net worth'],
    Affinity: ['Cooking Enthusiasts', 'Avid Investors', 'Frequently Dines Out', 'Fashionistas', 'Outdoor Enthusiasts']
  }

  // let categories = Object.keys(data)

  // export let attributes = {}

  // categories.forEach((category) => attributes[category] = [])

</script>

<svelte:head>
  <title>Audiences</title>
</svelte:head>

<h1 class="text-5xl mb-8">Audiences</h1>

<h2 class="text-2xl my-4">Create audience</h2>

<div class="form-control">
  <label class="label">
    <span class="label-text">Audience Name</span>
  </label>
  <input type="text" placeholder="Audience" required class="input input-bordered">
</div>

<!-- <SearchFilter {dataCategories} bind:search /> -->
<AudienceFilter {data} bind:attributes bind:searchCategory />

<!-- <h3 class="text-xl my-4"> Audience Definition</h3> -->
<!-- <p><em>add selected audience attributes</em></p> -->

<!-- {#if search}
  <p class="my-2 text-secondary">{search}</p>
{/if} -->





<!-- <hr/> -->
<!-- <h3 class="text-2xl my-4">Experiments</h3> -->


<!-- <h3 class="text-xl my-4">Select Attributes</h3>

<div>
  {#each categories as category}
      <div class="collapse w-96 border rounded-box border-base-300 collapse-arrow my-2">
        <input type="checkbox">
        <div class="collapse-title text-xl font-medium">
          {category}
        </div>
        <div class="collapse-content">

          <input on:focus={() => isFocused = true} on:blur={() => isFocused = false} bind:value={search} placeholder="Search" class="input input-sm input-bordered w-full mb-2" type="text">

          <ul>
            {#each data[category] as attribute}
              <li>
                <label>
                  <input type="checkbox" bind:group={attributes[category]} value={attribute}>
                  <span class="label-text">{attribute}</span>
                </label>
              </li>
            {/each}
          </ul>
        </div>
      </div>
  {/each}
  </div> -->


<!-- <hr/> -->
<h3 class="text-xl my-4">Chosen Audience Attributes</h3>

<!-- {console.log(attributes)} -->

{#if Object.values(attributes).flat().length > 0}
  <div class="border rounded-box bg-base-100 p-4 grid grid-cols-2 gap-4">
    <!-- <ul> -->
      {#each Object.keys(attributes) as category}
        {#each attributes[category] as attribute}
          <!-- <li> -->
            <label>
              <input type="checkbox" bind:group={attributes[category]} value={attribute}>
              <span class="label-text">{category}: {attribute}</span>
            </label>
          <!-- </li> -->
        {/each}
      {/each}
    <!-- </ul> -->
  </div>
{/if}


<!--  onClick: save to DB -->
<button class="btn btn-sm btn-accent w-20 my-4">Save</button>

<h3 class="text-2xl my-4">Saved audiences</h3>
<p><em>add a table component here</em></p>
