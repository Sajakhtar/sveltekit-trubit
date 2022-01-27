<script>
  import ThemeSelect from "./theme-select.svelte";
  // import { browser } from '$app/env'
  // import { goto } from '$app/navigation'
  // import Error from '$lib/Error.svelte'
  import { getUser, signOut } from '$lib/auth'


  const user = getUser()
  // if (browser && !user) goto('/brands')
  async function handleSignout() {
    await signOut()
    goto('/brands')
  }
</script>

<div class="rounded-lg shadow bg-base-200 drawer drawer-mobile h-52 min-h-screen">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label>
    <div class="hidden text-xs text-center lg:block">Menu is always open on desktop size.
      <br>Resize the browser to see toggle button on mobile size
    </div>
    <div class="text-xs text-center lg:hidden">Menu can be toggled on mobile size.
      <br>Resize the browser to see fixed sidebar on desktop size
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li>
        <div class="flex justify-between">
          <ThemeSelect />
          <button on:click={handleSignout} class="btn btn-sm">Sign out</button>
        </div>
      </li>
      <li>
        <a>Menu Item</a>
      </li>
      <li>
        <a>Menu Item</a>
      </li>
    </ul>
  </div>
</div>
