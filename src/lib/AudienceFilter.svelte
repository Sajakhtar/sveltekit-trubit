<script>
  import { fade } from 'svelte/transition'
  export let data
  export let searchCategory = ""
  export let searchAttribute = ""

  let isFocusedCategory = false
  let isFocusedAttribbute = false

  let categories = Object.keys(data)

  let attributes = {}

  categories.forEach((category) => attributes[category] = [])

  $: filteredCategories = categories.filter((category) => {
    return searchCategory === "" || category.toLowerCase().indexOf(searchCategory.toLowerCase()) !== -1
  })

  // $: filteredAttributes =

</script>


<div class="relative">
  <label class="label">
    <span class="label-text">Audience attributes</span>
  </label>
  <input on:focus={() => isFocusedCategory = true} on:blur={() => isFocusedCategory = false} bind:value={searchCategory} placeholder="Search" class="input input-bordered w-full" type="text">

  {#if isFocusedCategory}
    <div class="border rounded-box border-base-200 bg-base-100 p-2 overflow-auto absolute top-24 left-0 z-50">
      {#each filteredCategories as category}
          <div class="collapse w-96 border rounded-box border collapse-arrow my-2">
            <input type="checkbox">
            <div class="collapse-title text-md">
              {category}
            </div>
            <div class="collapse-content">

              <input on:focus={() => isFocused = true} on:blur={() => isFocused = false} bind:value={searchAttribute} placeholder="Search" class="input input-sm input-bordered w-full mb-2" type="text">

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
    </div>
  {/if}

</div>
