<script>
  export let dataCategories
</script>


<div>
  <label class="label">
    <span class="label-text">Search audience attributes</span>
  </label>
  <input placeholder="search" class="input input-bordered w-full" type="text">
</div>

<ul>
  {#each dataCategories as dataCategory}
    <li>{dataCategory}</li>
  {/each}
</ul>
