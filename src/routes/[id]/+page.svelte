<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { GridItem } from '$lib/myTypes';

	import { recipeInfo } from '$lib/recipeStore';

	// import { getSingleRecipe } from '$lib/helpers';
	// let myDataPromise: Promise<ResData>;
	let mySelf: GridItem | undefined;
	export let data: PageData;

	onMount(() => {
		// if ($recipeInfo.currentRecipes.length > 0)
		// mySelf = $recipeInfo.currentRecipes.find((item) => item.id === data.id);
		mySelf = $recipeInfo.currentRecipes.find((item) => item.id === data.id);
		if (mySelf) console.dir(mySelf);
	});
</script>

<h1 class="title">Huhu!</h1>
<h2 class="subtitle">This is the Single Page for {data.id}</h2>
