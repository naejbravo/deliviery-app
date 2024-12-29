<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class=" flex flex-col h-screen justify-center items-center">
	{@render children()}
</div>
