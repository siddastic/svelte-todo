<script lang="ts">
    import Add24 from "carbon-icons-svelte/lib/Add24";
    import { bind } from "svelte-simple-modal";
    import { fade } from "svelte/transition";
    import { addListModal } from "../stores/stores";
    import CreateListModal from "./create_list_modal.svelte";
    import DrawerItem from "./drawer-item.svelte";

    const showAddModal = () =>
        // @ts-ignore
        addListModal.set(bind(CreateListModal));
</script>

<div class="drawer" transition:fade>
    <div>
        <DrawerItem title="Short Term Goals" color="primary" />
        <DrawerItem title="Long Term Goals" color="secondary" />
        <DrawerItem title="College" color="primary" />
        <DrawerItem title="JS IDE" color="secondary" />
    </div>
    <div>
        <hr color="#b6b6b9" size=".99" />
        <DrawerItem title="Create New" color="primary" on:click = {showAddModal}>
            <Add24 />
        </DrawerItem>
    </div>
</div>

<style>
    .drawer {
        z-index: 0;
        background-color: #21212b;
        width: 400px;
        height: 93vh;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
