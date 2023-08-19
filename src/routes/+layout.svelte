<script>
import './app.css'
</script>
<nav>
  <a href='/'>Home</a>
  <a href='/about'>About</a>
  <a href='/kittens'>Kittens</a>
  <a href='/resources'>Resources</a>
  <a href='/contact'>Contact</a>
</nav>
<main class='flex flex-col flex-wrap max-w-6xl mx-auto items-center justify-center h-screen'>
<slot />
</main>