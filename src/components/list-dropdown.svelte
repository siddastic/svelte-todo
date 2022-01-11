<script lang="ts">
    import CheckmarkOutlineWarning24 from "carbon-icons-svelte/lib/CheckmarkOutlineWarning24";
    import Select_0224 from "carbon-icons-svelte/lib/Select_0224";
    import Select_0124 from "carbon-icons-svelte/lib/Select_0124";
    import TaskRemove24 from "carbon-icons-svelte/lib/TaskRemove24";


    import { removeItem, saveCurrentStoreDataToLocalStorage } from "../api/helpers";
    import { MainDataStore, OpenedListId } from "../stores/stores";

    const clearList = () => {
        MainDataStore.update((data) => {
            const mainData = data;
            let oldItems = mainData.items;
            const currentItem = mainData.items.filter((e) => {
                return e.key == $OpenedListId;
            })[0];
            // to remove current item from old items
            oldItems = removeItem(oldItems, currentItem);
            currentItem.list = [];
            const newData = { ...mainData, items: [...oldItems, currentItem] };
            return newData;
        });
        saveCurrentStoreDataToLocalStorage();
    };
    const changeItemSelection = (newState: boolean) => {
        MainDataStore.update((data) => {
            const mainData = data;
            let oldItems = mainData.items;
            const currentItem = mainData.items.filter((e) => {
                return e.key == $OpenedListId;
            })[0];
            // to remove current item from old items
            oldItems = removeItem(oldItems, currentItem);
            currentItem.list.forEach(e=>{
                e.completed = newState;
            });
            const newData = { ...mainData, items: [...oldItems, currentItem] };
            return newData;
        });
        saveCurrentStoreDataToLocalStorage();
    };
    const removeCompleted = () => {
        MainDataStore.update((data) => {
            const mainData = data;
            let oldItems = mainData.items;
            const currentItem = mainData.items.filter((e) => {
                return e.key == $OpenedListId;
            })[0];
            // to remove current item from old items
            oldItems = removeItem(oldItems, currentItem);
            currentItem.list = currentItem.list.filter(cur=>!cur.completed);
            const newData = { ...mainData, items: [...oldItems, currentItem] };
            return newData;
        });
        saveCurrentStoreDataToLocalStorage();
    };
</script>

<div class="dropdown">
    <slot></slot>
    <div class="dropdown-content">
        <div class="dropdown-tile" on:click={clearList}>
            <div class="leading">
                <CheckmarkOutlineWarning24 />
            </div>
            <div class="title">Clear List</div>
        </div>
        <div class="dropdown-tile" on:click={()=>changeItemSelection(true)}>
            <div class="leading">
                <Select_0124 />
            </div>
            <div class="title">Select all items</div>
        </div>
        <div class="dropdown-tile" on:click={()=>changeItemSelection(false)}>
            <div class="leading">
                <Select_0224 />
            </div>
            <div class="title">Unselect all items</div>
        </div>
        <div class="dropdown-tile" on:click={removeCompleted}>
            <div class="leading">
                <TaskRemove24 />
            </div>
            <div class="title">Remove Completed</div>
        </div>
    </div>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #21212b;
        min-width: 190px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-tile {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        cursor: pointer;
    }
    .dropdown-tile:hover {
        background-color: #17181f;
    }
    .leading {
        margin-right: 10px;
    }
</style>
