<script lang="ts">
    import Add24 from "carbon-icons-svelte/lib/Add24";
    import { bind } from "svelte-simple-modal";
    import { fade } from "svelte/transition";
    import {
        addListModal,
        MainDataStore,
        OpenedListId,
    } from "../stores/stores";
    import CreateListModal from "./create_list_modal.svelte";
    import DrawerItem from "./drawer-item.svelte";

    const showAddModal = () =>
        // @ts-ignore
        addListModal.set(bind(CreateListModal));

    let openedTileId = $OpenedListId;

    const openTodo = (id) => {
        console.log(id);
        OpenedListId.update(() => {
            return id;
        });
        console.log($MainDataStore);
        openedTileId = id;
    };
</script>

<div class="drawer" transition:fade>
    <div>
        {#each $MainDataStore.titles as li, index (li.id)}
            <DrawerItem
                isOpen={openedTileId == li.id}
                title={li.title}
                color={index % 2 == 0 ? "primary" : "secondary"}
                on:click={openTodo.bind(null, li.id)}
            />
        {/each}
    </div>
    <div>
        <hr color="#b6b6b9" size=".99" />
        <DrawerItem title="Create New" color="primary" on:click={showAddModal}>
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
