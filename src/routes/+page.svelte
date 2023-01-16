<script lang="ts">
	import type { ReqInfo } from '$lib/myTypes';
	import { edamanID, edamanKey } from '$lib/myConfigs';
	import { getRecipes } from '$lib/helpers';

	const reqInfo: ReqInfo = {
		appID: edamanID,
		appKey: edamanKey,
		ingr: 'lentils',
		diet: 'vegetarian'
	};

	function submitHandler() {
		getRecipes(reqInfo)
			.then((response) => {
				console.dir(response);
				// console.log('I got the data!');
			})
			.catch((error) => console.error(error));
	}
</script>

<main>
	<div class="form-container">
		<h1 class="title">Welcome</h1>
		<div class="form-top">
			<div>
				<input class="input" type="text" placeholder="Your ingredient" />
			</div>
			<div>
				<select class="select" id="diet" name="diet">
					<option>vegetarian</option>
					<option>vegan</option>
					<option>low carb</option>
					<option>high protein</option>
				</select>
			</div>
		</div>
		<div class="form-submit">
			<button class="button is-warning" on:click|preventDefault={submitHandler}>Submit</button>
		</div>
	</div>
</main>

<!-- vim: foldmethod=indent -->
<style lang="scss">
	main {
		margin: 2rem auto 0rem auto;
		width: 800px;
	}

	.form-container {
		background-color: hsl(201, 58%, 61%);
		border-radius: 15px;
		margin: 0 auto;
		padding: 2rem 3rem;
		width: 600px;
	}
</style>
