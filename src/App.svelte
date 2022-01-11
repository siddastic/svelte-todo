<script lang="ts">
	import Modal, { bind } from "svelte-simple-modal";
	import Header from "./components/header.svelte";
	import ListBody from "./components/list-body.svelte";
	import { addListModal } from "./stores/stores";

	console.log("Welcome to Svelte TODO App ❤️");
</script>

<main>
	<Header>
		<ListBody />
	</Header>
	<Modal
		show={$addListModal}
		styleContent={{
			padding: "0px",
			"border-radius": "12px",
			overflow: "hidden",
		}}
		styleWindow={{
			"background-color": "transparent",
		}}
		closeButton={false}
	/>
</main>
