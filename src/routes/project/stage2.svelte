<script lang="ts">
import { goto } from '$app/navigation';

	import { dataset_dev } from 'svelte/internal';
	import { grade, theme } from '../stores/projectStore';
	import themeData from './theme.json';

	const filteredData = themeData.filter((raw) => raw['grade' + $grade.toString()] == 1);
    const selectTheme = (data:any)=>{
        theme.set(data.factor);
        goto("stage3");
    }
    
</script>

<div class="shadow stats m-2">
	<div class="stat ">
		<div class="stat-title ">선택학년</div>
		<div class="stat-value">{$grade}학년</div>
	</div>
</div>

<div class="divider px-5 m-0" />

<div class="text-lg text-center">
	<p>주제를 선택해주세요</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
	{#each filteredData as data}
		<div class="shadow stats m-2 w-full " on:click={()=>selectTheme(data)}>
			<div class="stat hover:bg-info hover:bg-opacity-30 ">
				<div class="stat-value">
					<p>
						{data.factor}<span class="text-sm m-5 text-secondary"
							><span class="text-gray-400">관련교과 : </span>{data.subject}</span
						>
					</p>
				</div>
				<div class="stat-desc flow-root">
					{data.description}
				</div>
			</div>
		</div>
	{/each}
</div>
