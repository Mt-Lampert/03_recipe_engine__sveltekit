<script lang="ts">
	import { edamanID, edamanKey } from '$lib/myConfigs';
	import type { ReqInfo, ResData } from '$lib/myTypes';

	const reqInfo: ReqInfo = {
		appID: edamanID,
		appKey: edamanKey,
		ingr: 'lentils',
		diet: 'vegetarian'
	};
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
		<div class="form-submit"><button class="button is-warning">Submit</button></div>
	</div>
</main>

<style lang="scss">
	main {
		margin: 2rem auto 0rem auto;
		width: 800px;
	}

	.form-container {
		background-color: hsl(140, 60%, 50%);
		width: 600px;
		padding: 2rem 3rem;
	}
</style>
