<script lang="ts">
	import { goto } from '$app/navigation';

	import { grade } from '../stores/projectStore';
	const grades = [1, 2, 3, 4, 5, 6];
	const selectGrade = (g: number) => {
		grade.set(g);
		goto('stage2');
	};
</script>

<p class="text-lg text-center mt-4">학년을 선택하세요</p>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-2">
	{#each grades as g}
		<button
			class="btn btn-secondary btn-outline hover:btn-secondary"
			on:click={() => selectGrade(g)}>{g}학년</button
		>
	{/each}
</div>
