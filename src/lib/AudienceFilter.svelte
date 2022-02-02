<script>
  import { fade } from 'svelte/transition'
  export let data
  export let searchCategory = ""
  export let searchAttribute = ""
  // export let attributes

  let isFocusedCategory = false
  let isFocusedAttribbute = false

  // ATTRIBUTE SEARCH
  // on:collapse set filteredAttributes
  // forEach filteredAttributes list checkboxes
  // on:focus

  let categories = Object.keys(data)

  let attributes = {}

  categories.forEach((category) => attributes[category] = [])

  $: filteredCategories = categories.filter((category) => {
    return search === "" || category.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })

</script>
