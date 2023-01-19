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
		display: grid;
		grid-auto-flow: row;
		justify-items: center;
		margin-top: 3rem;

		gap: 0.5rem;
		@media screen and (min-width: 600px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (min-width: 960px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
