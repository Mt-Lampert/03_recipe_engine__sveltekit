<script lang="ts">
	export let data: import('./myTypes').GridItem;
</script>

<div class="recipe-card">
	<p>
		<a href={'/' + data.id}> <img src={data.img} alt="recipe snapshot" /></a>
	</p>

	<p>{data.title}</p>
</div>

<style lang="scss">
	.recipe-card {
		padding-top: 2rem;

		p {
			max-width: calc(15 * 1ch);
			text-align: center;
		}
	}
</style>
