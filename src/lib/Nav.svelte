<script>
  import ThemeSelect from "./theme-select.svelte";
</script>

<div class="navbar mb-2 shadow-lg bg-primary text-neutral-content rounded-box">
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold">
            TRUBIT
          </span>
  </div>
  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="flex items-stretch">
      <a href="/" class="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
      <a href="/consumers" class="btn btn-ghost btn-sm rounded-btn">
              Consumers
            </a>
      <a href="/brands" class="btn btn-ghost btn-sm rounded-btn">
              Brands
            </a>
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSelect />
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="inline-block w-6 h-6 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      </svg>
    </button>
  </div>
</div>
