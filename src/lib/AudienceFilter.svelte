<script>
  import { fade } from 'svelte/transition'
  import { clickOutside } from './clickOutside'

  export let data
  export let searchCategory = ""
  export let searchAttribute = ""

  let isFocusedCategory = false
  let isFocusedAttribbute = false

  let categories = Object.keys(data)

  export let attributes = {}

  categories.forEach((category) => attributes[category] = [])

  $: filteredCategories = categories.filter((category) => {
    return searchCategory === "" || category.toLowerCase().indexOf(searchCategory.toLowerCase()) !== -1
  })


  $: filteredAttributes = (category) => {
    return data[category].filter((attribute) => {
      return searchAttribute === "" || attribute.toLowerCase().indexOf(searchAttribute.toLowerCase()) !== -1
    })
  }

</script>


<div class="relative" use:clickOutside on:clickoutside={() => isFocusedCategory = false} >
  <label class="label">
    <span class="label-text">Audience attributes</span>
  </label>
  <input on:focus={() => isFocusedCategory = true} bind:value={searchCategory} placeholder="Search" class="input input-bordered w-full" type="text">

  {#if isFocusedCategory}
    <div class="border rounded-box border-base-200 bg-base-100 p-2 overflow-auto absolute top-24 left-0 z-50">
      {#each filteredCategories as category (category)}
          <div class="collapse w-96 border rounded-box collapse-arrow my-2">
            <input type="checkbox">
            <div class="collapse-title text-md">
              {category}
            </div>
            <div class="collapse-content">

              <input bind:value={searchAttribute} placeholder="Search" class="input input-sm input-bordered w-full my-2" type="text">

              <ul>
                <!-- {#each data[category] as attribute} -->
                {#each filteredAttributes(category) as attribute (attribute)}
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" bind:group={attributes[category]} value={attribute} class="checkbox checkbox-xs checkbox-accent mr-2">
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
