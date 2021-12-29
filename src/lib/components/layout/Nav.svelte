<script lang="ts">
  export let section: string;
</script>

<nav class="bg-gray-800 w-full px-8 flex flex-1 items-center justify-between h-16 rounded-t-md">
  <div class="flex-1 flex">
    <div class="flex-shrink-0 flex items-center ">
      <img class="block h-8 w-auto" src="https://image.flaticon.com/icons/png/512/931/931949.png" alt="Beer" />
    </div>
    <div class="ml-6">
      <div class="flex space-x-4">
        <a sveltekit:prefetch href="/" class:active={section === ''} class:inactive={section !== ''}>Home</a>
        <a sveltekit:prefetch href="/maps" class:active={section === 'maps'} class:inactive={section !== 'maps'}>Maps</a>
      </div>
    </div>
  </div>
</nav>

<style lang="postcss">
  a {
    @apply px-3 py-2 rounded-md text-sm font-medium;
  }
  .active {
    @apply bg-gray-900 text-white;
  }
  .inactive {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white;
  }
</style>
