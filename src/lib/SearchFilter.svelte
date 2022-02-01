<script>
  export let dataCategories
  let search = ""
  let isFocused = false

  $: filteredDataCategories = dataCategories.filter((category) => {
    return search === "" || category.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })
</script>


<div>
  <label class="label">
    <span class="label-text">Audience attributes</span>
  </label>
  <input on:focus={() => isFocused = true} on:blue={() => isFocused = false} bind:value={search} placeholder="Search" class="input input-bordered w-full" type="text">
</div>

{#if isFocused}
  <ul>
    {#each filteredDataCategories as dataCategory}
      <li on:click={() => search = dataCategory}>{dataCategory}</li>
    {/each}
  </ul>
{/if}
