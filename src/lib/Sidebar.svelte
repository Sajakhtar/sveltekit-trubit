<script>
  import ThemeSelect from "./theme-select.svelte";
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import Error from '$lib/Error.svelte'
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
  <!-- <div class="flex flex-col items-center justify-center drawer-content"> -->
  <div class="flex flex-col p-4 drawer-content">
    <!-- <label for="my-drawer-2" class="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label> -->
    <label for="my-drawer-2" class="mb-4 btn btn-neutral btn-outline btn-square drawer-button lg:hidden absolute top-4 left-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </label>
    <!-- <div class="hidden text-xs text-center lg:block">Menu is always open on desktop size.
      <br>Resize the browser to see toggle button on mobile size
    </div>
    <div class="text-xs text-center lg:hidden">Menu can be toggled on mobile size.
      <br>Resize the browser to see fixed sidebar on desktop size
    </div> -->
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
      <li class="border-b-2 border-neutral mb-4 pb-2">
        <div class="flex justify-between items-center">
          <ThemeSelect class="btn"/>
          <button on:click={handleSignout} class="btn btn-ghost">Sign out</button>
        </div>
      </li>
      <li>
        <a href="/brands/account">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill mr-4" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          Homebase
        </a>
      </li>
      <li>
        <a href="/brands/account/audiences">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill mr-4" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          Audiences
        </a>
      </li>
      <li>
        <a href="/brands/account/campaigns">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images mr-4" viewBox="0 0 16 16">
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
          </svg>
          Campaigns
        </a>
      </li>
    </ul>
  </div>
</div>
