<script lang="ts">
	import { onMount, SvelteComponent } from 'svelte';
	import Container from './components/container.svelte';
	let datas = ['bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500'];
</script>

<button class="btn btn-primary">dd</button>

{#each datas as data}
	<svelte:component this={Container} color={data} />
{/each}
