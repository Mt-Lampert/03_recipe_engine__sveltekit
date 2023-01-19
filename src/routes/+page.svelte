<script lang="ts">
	import type { ReqInfo, ResData } from '$lib/myTypes';

	import { edamanID, edamanKey } from '$lib/myConfigs';
	import { getRecipes } from '$lib/helpers';

	import RecipesList from '$lib/RecipesList.svelte';

	const reqInfo: ReqInfo = {
		appID: edamanID,
		appKey: edamanKey,
		ingr: 'lentils',
		diet: 'vegetarian'
	};

	let myDiet = 'vegetarian';
	let myIngredient = 'lentils';
	let myState: ResData = {
		state: 'idle',
		payload: [],
		error: ''
	};

	function submitHandler() {
		reqInfo.diet = encodeURI(myDiet);
		reqInfo.ingr = encodeURI(myIngredient);

		getRecipes(reqInfo)
			.then((response) => {
				myState = response;
			})
			.catch((error) => console.error(error));
	}
</script>

<main>
	<div class="form-container">
		<h1 class="title">Welcome</h1>
		<div class="form-top">
			<div>
				<input class="input" type="text" placeholder="Your ingredient" bind:value={myIngredient} />
			</div>
			<div class="diet is-flex">
				<select class="select" id="diet" name="diet" bind:value={myDiet}>
					<option selected>vegetarian</option>
					<option>vegan</option>
					<option>low-carb</option>
					<option>high-protein</option>
				</select>
			</div>
		</div>
		<div class="form-submit">
			<button class="button is-warning" on:click|preventDefault={submitHandler}>Submit</button>
		</div>
	</div>
	<!--  This is where the recipes reside -->

	{#if myState.state === 'success'}
		<RecipesList recipes={myState.payload} />
	{/if}
</main>

<!-- vim: foldmethod=indent -->
<style lang="scss">
	main {
		margin: 0rem auto 0rem auto;
		max-width: 800px;

		@media screen and (min-width: 800px) {
			margin-top: 1rem;
		}
	}

	.form-container {
		background-color: hsl(201, 58%, 61%);
		/* border-radius: 15px; */
		margin: 0 auto;
		padding: 2rem 3rem;
		max-width: 600px;
		text-align: center;

		.diet {
			margin-top: 1rem;
			& > select {
				width: 100%;
			}
		}

		.form-submit {
			margin-top: 2rem;
			text-align: center;
		}

		@media screen and (min-width: 800px) {
			border-radius: 10px;
		}
	}
</style>
