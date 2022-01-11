<script lang="ts">
    import { addListModal, MainDataStore, OpenedListId } from "../stores/stores";
    import { v4 as uuidv4 } from "uuid";
    import type { TodoList } from "../interfaces/global";
import { saveCurrentStoreDataToLocalStorage } from "../api/helpers";

    let newTitle: string = "";
    let message: string = "";
    let maxTitleLimit = 50;

    $: isValid = () => {
        const trimmed = newTitle.trim();
        if (trimmed.length == 0) {
            message = "Enter something...";
            return false;
        }
        if (trimmed.length > maxTitleLimit) {
            message = `'Trim it down to 50 characters or less' - Saitama`;
            return false;
        }
        return true;
    };

    const closeModal = () => {
        addListModal.set(null);
    };

    const saveTitle = () => {
        closeModal();
        let id = uuidv4();
        MainDataStore.update((data) => {
            return {
                ...data,
                titles: [
                    ...data.titles,
                    {
                        id,
                        millisecondsSinceEpoch: Date.now(),
                        title: newTitle,
                    },
                ],
                items: [
                    ...data.items,
                    {
                        key: id,
                        list: [],
                    },
                ],
            };
        });
        OpenedListId.update(() => {
            return id;
        });
        saveCurrentStoreDataToLocalStorage();
    };

    const handleEnterPress = (k: KeyboardEvent) => {
        if (k.key == "Enter") {
            if (isValid()) {
                saveTitle();
            }
        }
    };
</script>

<div class="modal">
    <div class="header">Create New List</div>
    <div class="modal-content">
        <!-- svelte-ignore a11y-autofocus -->
        <input
            type="text"
            placeholder="Enter New List Title"
            bind:value={newTitle}
            autofocus={true}
            on:keydown={handleEnterPress}
        />
    </div>
    <div class="validation-message">
        {#if !isValid() && newTitle.length > 0}
            {message}
        {/if}
    </div>
    <div class="modal-buttons">
        <button on:click={closeModal}> Close </button>
        &nbsp; &nbsp;
        <button
            class="primary-button"
            disabled={!isValid()}
            on:click={saveTitle}
        >
            Save
        </button>
    </div>
</div>

<style>
    .modal {
        background-color: #17181f;
        color: white;
    }
    .header {
        background-color: #21212b;
        padding: 12px 16px;
        color: #b6b6b9;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
    }
    .modal-content {
        padding: 16px 8px;
    }
    .modal-buttons {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        padding-right: 20px;
        padding-bottom: 10px;
    }
    input {
        border: none;
        outline: none;
        background-color: transparent;
        color: white;
        margin-bottom: 0px;
        width: 100%;
    }
    button {
        background-color: transparent;
        color: white;
        border: none;
        outline: none;
    }
    .primary-button {
        background-color: #fc76a1;
    }
    .validation-message {
        padding: 12px 16px;
        color: goldenrod;
    }
</style>
