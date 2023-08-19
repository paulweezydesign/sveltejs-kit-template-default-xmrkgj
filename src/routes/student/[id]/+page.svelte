<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>
<section class=''>
<img src={data.student.image} alt={data.student.name} />
<h1 class='text-4xl font-black'>{data.student.name}</h1>
<p class='mb-4'>{data.student.info}</p>
<div class='flex flex-row'>
<a class='px-4 py-3 rounded bg-[deeppink] text-white text-center  ' href='/'>Back</a>
<div class='py-4 px-2'></div>
<a class='px-4 py-3 rounded border-[cyan] border-2 text-[cyan] text-center ' href='/contact'>Contact Us</a>
</div>
</section>