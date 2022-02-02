<script>
  import { fade } from 'svelte/transition'
  export let dataCategories
  export let search = ""
  export let attributes
  let isFocused = false

  $: filteredDataCategories = dataCategories.filter((category) => {
    return search === "" || category.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })
</script>


<div class="reltive">
  <label class="label">
    <span class="label-text">Audience attributes</span>
  </label>
  <input on:focus={() => isFocused = true} on:blur={() => isFocused = false} bind:value={search} placeholder="Search" class="input input-bordered w-full" type="text">
</div>

{#if isFocused}
  <ul transition:fade={{duration: 200}}  class="menu w-64 border bg-base-100 menu-compact lg:menu-normal rounded-box overflow-auto absolute  inset-x-100">
    {#each filteredDataCategories as dataCategory}
      <li transition:fade={{duration: 200}} on:click={() => {
        search = dataCategory
        isFocused = false
      }}><a class="border-b">
        <!-- {dataCategory} -->
        <div class="collapse w-96 collapse-arrow">
          <input type="checkbox">
          <div class="collapse-title">
            {dataCategory}
          </div>
          <div class="collapse-content">
            <p>attributes</p>
          </div>
        </div>
      </a></li>
    {/each}
  </ul>
{/if}
