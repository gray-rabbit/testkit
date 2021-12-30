<script lang="ts">
    export let color="bg-black"
    let el:HTMLDivElement;
    export const get = ()=>el.clientHeight;
</script>

<div bind:this={el} class={"min-h-screen flex justify-center items-center "+color}>
    <p class="text-lg text-black">{color}</p>
</div>