<script>
  import { fade } from 'svelte/transition'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import { getUser, signIn } from '$lib/auth'
  import Error from '$lib/Error.svelte'
  // import Nav from '$lib/Nav.svelte'


  const user = getUser()
  if (browser && user) goto('/brands/account')

  let email = "test@gmail.com"
  let signInPromise = Promise.resolve({})
  function handleSignIn() {
    signInPromise = signIn({ email })
  }
</script>

<svelte:head>
  <title>Brands</title>
</svelte:head>


<!-- <div class="container mx-auto my-4">
  <Nav />
</div> -->

<div class="hero min-h-screen overflow-hidden bg-gradient-to-br from-accent to-secondary" transition:fade>
  <div class="flex-col justify-center hero-content lg:flex-row">
    <div class="text-center lg:text-left">
      <h1 class="mb-5 text-5xl font-bold">
            TRUBIT for Brands
          </h1>
      <p class="mb-5">
            Your Web3 portal to interact with existing customer in novel ways and reach new audiences.
          </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body bg-base-200">

        {#await signInPromise}
          Sending Magic Link to {email}
        {:then {data, error}}
          <Error {error} />

          {#if data}
            <strong class="text-success">Successfully sent Magic Link to {email}</strong>
          {:else}
            <form class="form-control" on:submit|preventDefault={handleSignIn}>
              <label for="email" class="label">
                <span class="label-text">Signin or Signup</span>
              </label>
              <input bind:value={email} id="email" type="Email" placeholder="email" required class="input input-bordered">
              <input type="button" value="Get Magic Link" class="btn btn-primary mt-6">
            </form>
          {/if}
        {/await}
        <!-- <div class="form-control mt-6"> -->
          <!-- <input type="button" value="Get Magic Link" class="btn btn-primary"> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</div>
