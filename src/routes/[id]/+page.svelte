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

<h1 class="title has-text-centered mt-6">Here's your recipe!</h1>

<div class="main mb-6">
	{#await myStatusPromise}
		<p>Waiting ...</p>
	{:then myStatus}
		<h2 class="subtitle has-text-centered pl-4 pr-4">{myStatus.payload.recipe.label}</h2>
		<div class="struct">
			<div class="left">
				<div class="my-card">
					<div class="my-card-image has-text-centered">
						<img src={myStatus.payload.recipe.image} alt={myStatus.payload.recipe.label} />
					</div>
					<div class="my-card-content">
						<p>300 calories</p>
						<p>low-carb</p>
					</div>
				</div>
			</div>
			<div class="right">
				<h2 class="subtitle has-text-centered">Ingredients</h2>

				<ul>
					{#each myStatus.payload.recipe.ingredients as element}
						<li class="block">{element.text}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/await}
</div>

<style lang="scss">
	$default-space: 3rem;

	.struct {
		max-width: 600px;
		margin: $default-space auto;

		@media screen and (max-width: 400px) {
			margin-top: $default-space;

			.right {
				margin-top: $default-space;

				ul {
					padding-left: $default-space;
				}
			}
		}

		@media screen and (min-width: 800px) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: $default-space;

			.right {
				padding-right: $default-space;
			}
		}

		@media screen and (min-width: 1280px) {
			ul {
				padding-left: 2rem;
			}
		}
	}

	.my-card-content {
		> p {
			text-align: center;
		}
	}
</style>
