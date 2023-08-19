<script>
  import debounce from 'lodash.debounce';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  /** @type {import('./$types').PageData} */
  export let data;

  const updateSearch = debounce((search) => {
    goto(`?search=${search}`, { replaceState: true, keepFocus: true });
  }, 500);
  const handleInput = (event) => {
    updateSearch(event.target.value);
  };
</script>
<section class='grid grid-cols-1 place-items-center justify-center h-screen mx-auto'>
<h1 class='text-7xl font-black'>Let the cuteness begin..</h1>
<div class='my-4 '>
<form method="GET" on:submit|preventDefault>
  <input
  class='border-gray-800 py-2 rounded border-2'
  placeholder='Search'
    type="text"
    name="search"
    value={$page.url.searchParams.get('search') || ''}
    on:input={handleInput}
  >
  <button class='px-4 py-3 rounded bg-black text-white' type="submit">Search</button>
</form>
</div>
<div class='flex flex-row flex-wrap mx-auto gap-4'>
{#each data.students as student (student.id)}
<div>

  <a href="/student/{student.id}">
  <img src={student.image} alt={student.name} class='w-[200px] h-[300px]' />
  <h1 class=''>{student.name}</h1>
  </a>
</div>
{/each}
</div>
</section>
<style>
  a {
    display: block;
  }
</style>