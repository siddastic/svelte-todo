<script lang="ts">
    import ChevronLeft24 from "carbon-icons-svelte/lib/ChevronLeft24";
    import OverflowMenuHorizontal24 from "carbon-icons-svelte/lib/OverflowMenuHorizontal24";
    import ListItemTile from "./list-item-tile.svelte";
    import AddTaskTile from "./add_task_tile.svelte";
    import { MainDataStore, OpenedListId } from "../stores/stores";
    import { fade } from "svelte/transition";

    $: listId = $OpenedListId;
    $: isAnyListOpen = typeof listId == "number" || typeof listId == "string";
    $: selectedList = $MainDataStore.titles.filter((e) => e.id == listId)[0];
    $: filteredItem = $MainDataStore.items.filter(
        (i) => i.key == $OpenedListId
    );
    $: items = filteredItem.length > 0 ? filteredItem[0].list : [];
    const changeTaskState = (id, newState) => {
        MainDataStore.update((data) => {
            const mainData = data;
            const oldItems = mainData.items;
            const currentItem = mainData.items.filter((e) => {
                return e.key == $OpenedListId;
            })[0];
            let itemIndex = currentItem.list.indexOf(
                currentItem.list.filter((e) => e.id == id)[0]
            );
            currentItem.list[itemIndex].completed = newState;
            const newData = { ...mainData, items: [...oldItems, currentItem] };
            return newData;
        });
    };
</script>

<div class="list-body">
    {#if isAnyListOpen}
        <div class="content">
            <div class="header row">
                <div class="title row">
                    <div class="icon">
                        <ChevronLeft24 />
                    </div>
                    &nbsp; &nbsp;
                    {selectedList.title}
                </div>
                <div class="options">
                    <OverflowMenuHorizontal24 />
                </div>
            </div>
            <br />
            <AddTaskTile />
            <br />
            <br />
            <span style="font-weight: 500;">Tasks - {items.length}</span>
            <br />
            <br />
            {#each items as item (item.id)}
                <ListItemTile
                    completed={item.completed}
                    title={item.title}
                    on:change-state={(newState) => {
                        changeTaskState(item.id, newState.detail);
                    }}
                />
            {/each}
            {#if items.length == 0}
                <div class="no-todos-state" in:fade>
                    No todos yet add new tasks from above
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .list-body {
        width: 100%;
        height: 93vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 7vh;
    }
    .content {
        width: 50%;
    }
    .header {
        justify-content: space-between;
        align-items: center;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #21212b;
        padding: 8px;
    }
    .title {
        align-items: center;
        font-size: 24px;
        font-weight: 500;
    }
    .no-todos-state {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        color: gray;
    }
</style>
