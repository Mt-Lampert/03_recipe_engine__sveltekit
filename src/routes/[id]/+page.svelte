<script lang="ts">
	import type { PageData } from './$types';
	import type { GridItem, ResData } from '$lib/myTypes';
	import { getSingleRecipe } from '$lib/helpers';
	import { recipeInfo } from '$lib/recipeStore';

	let myStatusPromise: Promise<ResData>;
	let mySelf: GridItem | undefined;
	export let data: PageData;

	mySelf = $recipeInfo.currentRecipes.find((item) => item.id === data.id);
	if (mySelf) myStatusPromise = getSingleRecipe(mySelf.url);
</script>

<h1 class="title">Here's your recipe!</h1>

{#await myStatusPromise}
	<p>Waiting ...</p>
{:then myStatus}
	<h2 class="subtitle">{myStatus.payload.recipe.label}</h2>
	<p><img src={myStatus.payload.recipe.image} alt={myStatus.payload.recipe.label} /></p>
	<h2 class="subtitle">Ingredients</h2>
	<ul>
		{#each myStatus.payload.recipe.ingredients as element}
			<li>{element.text}</li>
		{/each}
	</ul>
{/await}
