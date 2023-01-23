<script lang="ts">
	// './$types' refers to the entries in /app.d.ts
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="title">Huhu!</h1>
<h2 class="subtitle">This is the Single Page for {data.id}</h2>

