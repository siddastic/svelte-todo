<script>
    import Add24 from "carbon-icons-svelte/lib/Add24";
    import Checkmark24 from "carbon-icons-svelte/lib/Checkmark24";

    let newTask = "";

    $: startedTyping = newTask.length > 0;
    $: isValidInput = newTask.trim().length > 0;
</script>

<div class="add-task-tile row">
    <div class="icon">
        <Add24 style="fill : #17181f" />
    </div>
    <input
        class="content"
        contenteditable
        bind:value={newTask}
        placeholder="Add a task"
    />
    {#if startedTyping}
    <div class="indicator" class:valid-indicator={isValidInput}>
        {#if isValidInput}
            <Checkmark24 style="fill : mediumseagreen" />
        {/if}
    </div>
    {/if}
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
</style>