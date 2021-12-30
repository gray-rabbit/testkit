<script lang="ts">
	import type { Writable } from 'svelte/store';

	import {
		grade,
		theme,
		selectedAction,
		selectedMission,
		selectedQuest
	} from '../stores/projectStore';
	import { actions, quests, missions } from './element.json';
	const seletElement = (t: string, idx: number) => {
		console.log(idx);
		let temp: Writable<number[]>;
		let data: number[];
		if (t === 'q') {
			temp = selectedQuest;
			data = $selectedQuest;
		} else if (t === 'a') {
			temp = selectedAction;
			data = $selectedAction;
		} else if (t === 'm') {
			temp = selectedMission;
			data = $selectedMission;
		}
		if (data.includes(idx)) {
			temp.set([...data.filter((d) => d !== idx)]);
		} else {
			temp.set([...data, idx]);
		}
		console.log(data);
	};
</script>

<div class="shadow stats m-2">
	<div class="stat ">
		<div class="stat-title ">선택학년</div>
		<div class="stat-value">{$grade}학년</div>
	</div>
</div>
<div class="shadow stats m-2">
	<div class="stat ">
		<div class="stat-title ">주제</div>
		<div class="stat-value">{$theme}</div>
	</div>
</div>
<div class="text-2xl text-center m-2 p-2">탐구에서 선택하세요.</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 ">
	{#each quests as { quest, description, questIdx }}
		<div
			on:click={() => seletElement('q', questIdx)}
			class="bg-primary bg-opacity-10 select-none hover:bg-opacity-60 px-3 py-2 border-2 shadow border-slate-200 rounded-lg"
			class:bg-opacity-100={$selectedQuest.includes(questIdx)}
		>
			<p class="text-2xl text-black font-bold">{quest}</p>
			<p class="text-sm select-none">{description}</p>
		</div>
	{/each}
</div>

<div class="text-2xl text-center m-2 p-2">표현에서 선택하세요.</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 ">
	{#each actions as { action, description, actionIdx }}
		<div
			on:click={() => seletElement('a', actionIdx)}
			class="bg-secondary select-none bg-opacity-10 hover:bg-opacity-60 px-3 py-2 border-2 shadow border-slate-200 rounded-lg"
			class:bg-opacity-100={$selectedAction.includes(actionIdx)}
		>
			<p class="text-2xl text-black select-none font-bold">{action}</p>
			<p class="text-sm select-none">{description}</p>
		</div>
	{/each}
</div>

<div class="text-2xl text-center m-2 p-2">공유에서 선택하세요.</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 ">
	{#each missions as { mission, description, missionIdx }}
		<div
        on:click={() => seletElement('m', missionIdx)}
			class="bg-accent bg-opacity-10 select-none hover:bg-opacity-60 px-3 py-2 border-2 shadow border-slate-200 rounded-lg"
			class:bg-opacity-100={$selectedMission.includes(missionIdx)}
		>
			<p class="text-2xl select-none text-black font-bold">{mission}</p>
			<p class="text-sm select-none">{description}</p>
		</div>
	{/each}
</div>
