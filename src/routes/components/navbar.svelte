<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	let checked = false;
	const invertChecked = () => (checked = !checked);
</script>

{#if checked}
	<div
		class="min-h-screen bg-gray-600 w-full opacity-90 absolute"
		transition:fly={{ duration: 700, x: -100 }}
		on:click={invertChecked}
	/>
	<div
		class="min-h-screen w-11/12 bg-white opacity-100 absolute  p-5"
		transition:fly={{ delay: 100, duration: 800, x: -100 }}
	>
		<div class="flex justify-end" on:click={invertChecked}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 hover:bg-red-400 cursor-pointer"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</div>
		<div class="bottom">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 inline-block"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/>
			</svg>
			<span class="">홈으로</span>
		</div>
		<div class="">
			<button class="transition-all duration-500 btn btn-ghost btn-sm rounded-btn hover:bg-primary" on:click={()=>goto("/project")}>
				프로젝트수업
			</button>
		</div>
	</div>
{/if}
<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content drawer">
	<div class="flex-none drawer-content lg:hidden" on:click={invertChecked}>
		<div class="drawer-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</div>
	</div>

	<div class="flex-none px-2 mx-2">
		<span class="text-lg font-bold"> 코알라 </span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">
			<a class="btn btn-ghost btn-sm rounded-btn hover:bg-primary" href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
			</a>
			<button class="transition-all duration-500 btn btn-ghost btn-sm rounded-btn hover:bg-primary" on:click={()=>goto("/project")}>
				프로젝트수업
			</button>
			<button class="transition-all duration-500 btn btn-ghost btn-sm rounded-btn hover:bg-primary">
				About
			</button>
			<button class="transition-all duration-500 btn btn-ghost btn-sm rounded-btn hover:bg-primary">
				Contact
			</button>
		</div>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		</button>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</button>
	</div>
</div>
