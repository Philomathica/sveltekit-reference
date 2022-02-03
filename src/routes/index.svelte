<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = ({ session }) => {
    return {
      props: {
        user: session.user,
      },
    };
  };
</script>

<script lang="ts">
  export let user: User;
</script>

<h1>Welcome to SvelteKit Auth</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
{#if user}
  <h2>Welcome {user.name}</h2>
  <a href="/auth/logout.json" rel="external">
    <button class="p-2 border-2">Logout</button>
  </a>
{:else}
  <a href="/auth/login.json" rel="external">
    <button class="p-2 border-2">Login</button>
  </a>
{/if}
