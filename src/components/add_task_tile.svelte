<script lang="ts">
    import Add24 from "carbon-icons-svelte/lib/Add24";
    import Checkmark24 from "carbon-icons-svelte/lib/Checkmark24";
    import { MainDataStore, OpenedListId } from "../stores/stores";
    import { v4 as uuidv4 } from "uuid";
    import { removeItem, saveCurrentStoreDataToLocalStorage } from "../api/helpers";
    import Close24 from "carbon-icons-svelte/lib/Close24";

    let newTask = "";

    let maxCharactersLimit = 50;

    $: startedTyping = newTask.length > 0;
    $: isValidInput =
        newTask.trim().length > 0 && newTask.trim().length < maxCharactersLimit;

    const addTask = () => {
        MainDataStore.update((data) => {
            const mainData = data;
            let oldItems = mainData.items;
            const currentItem = mainData.items.filter((e) => {
                return e.key == $OpenedListId;
            })[0];
            // to remove current item from old items
            oldItems = removeItem(oldItems, currentItem);
            currentItem.list.push({
                completed: false,
                // If list was empty first then give id 1 to first element else random id (to let svelte animate component change automatically)
                id: currentItem.list.length == 0 ? 1 : uuidv4(),
                millisecondsSinceEpoch: Date.now(),
                title: newTask,
            });
            const newData = { ...mainData, items: [...oldItems, currentItem] };
            return newData;
        });
        newTask = "";
        saveCurrentStoreDataToLocalStorage();
    };

    const handleEnterPress = (k: KeyboardEvent) => {
        if (k.key == "Enter") {
            if (isValidInput) {
                addTask();
            }
        }
    };
</script>

<div class="add-task-tile row">
    <div
        class="icon"
        on:click={() => {
            if (isValidInput) {
                addTask();
            }
        }}
    >
        <Add24 style="fill : #17181f" />
    </div>
    <input
        class="content"
        contenteditable
        bind:value={newTask}
        placeholder="Add a task"
        on:keydown={handleEnterPress}
    />
    {#if startedTyping}
        <div class="indicator" class:valid-indicator={isValidInput}>
            {#if isValidInput}
                <Checkmark24 style="fill : mediumseagreen" />
            {:else}
                <Close24 style="fill:rgb(202, 50, 23)" />
            {/if}
        </div>
    {/if}
</div>
<div
    class="warning-message"
    class:warning-message-open={startedTyping && !isValidInput}
>
    {newTask.trim().length > maxCharactersLimit
        ? `Enter a task less than ${maxCharactersLimit} characters`
        : "Empty spaces are not allowed"}
</div>

<style>
    .add-task-tile {
        border: 3px solid #1c1c25;
        padding: 10px 8px;
        border-radius: 20px;
        align-items: center;
        color: #9d9da2;
        font-size: 20px;
        font-weight: 500;
    }
    .add-task-tile .icon {
        background-color: #fc76a1;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #21212b;
        padding: 8px;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .content {
        margin-left: 15px;
        border: none;
        outline: none;
        background-color: transparent;
        color: white;
        margin-bottom: 0px;
        width: 100%;
        caret-color: #fc76a1;
    }
    .indicator {
        display: flex;
        width: 25px;
        height: 25px;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        border: 3px solid rgb(202, 50, 23);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .valid-indicator {
        border: none;
    }
    .warning-message {
        transform: scaleY(0);
        color: goldenrod;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .warning-message-open {
        margin-top: 17px;
        transform: scaleY(1);
    }
</style>
