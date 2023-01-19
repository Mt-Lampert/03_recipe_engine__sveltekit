<script lang="ts">
	import type { GridItem } from './myTypes';
	import RecipeItem from './RecipeItem.svelte';

	export let recipes: GridItem[];
</script>

<div class="recipe-container">
	{#each recipes as recipe (recipe.id)}
		<RecipeItem data={recipe} />
	{/each}
</div>

<style lang="scss">
	.recipe-container {
		/* needs to be a grid on widescreen: 4 x 5 */
		margin-top: 3rem;
	}
</style>
