<script>
	import Navbar from './components/navbar.svelte';
	import './main.css';
</script>

<div class="container mx-auto min-h-screen">
	<div class="sticky top-0">
		<Navbar />
	</div>
	<slot />
</div>
