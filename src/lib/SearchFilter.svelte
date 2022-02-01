<script>
  export let dataCategories
  let search = ""

  $: filteredDataCategories = dataCategories.filter((category) => {
    return search === "" || category.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })
</script>


<div>
  <label class="label">
    <span class="label-text">Audience attributes</span>
  </label>
  <input bind:value={search} placeholder="Search" class="input input-bordered w-full" type="text">
</div>

<ul>
  {#each filteredDataCategories as dataCategory}
    <li>{dataCategory}</li>
  {/each}
</ul>
