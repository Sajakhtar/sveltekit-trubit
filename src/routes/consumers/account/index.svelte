<script>
  // import { userSession } from '$lib/stacks-auth';
  import { goto } from '$app/navigation'

  const handleSignOut = () => {
    // userSession.signUserOut();
    // window.location = '/';
    goto('/consumers')
  }
</script>


<main class="container mx-auto my-4">
  <h1 class="text-5xl mb-8">Consumer Account</h1>
  <a href="/consumers/account/gallery" class="btn btn-primary">My NFTs</a>
  <button on:click={handleSignOut} class="btn">Sign out</button>
</main>
