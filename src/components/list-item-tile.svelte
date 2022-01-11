<script lang="ts">
    import Checkmark24 from "carbon-icons-svelte/lib/Checkmark24";
    import Delete24 from "carbon-icons-svelte/lib/Delete24";
    import { createEventDispatcher } from "svelte";
    import { scale, slide } from "svelte/transition";
    export let completed = false;
    export let title = "Finish Collaborative Essay";

    const dispatch = createEventDispatcher();

    const handleTileSelect = () => {
        completed = !completed;
        dispatch("change-state", completed);
    };

    const handleDelete = () => {
        dispatch("delete");
    };
</script>

<div class="list-tile row" on:click={handleTileSelect} in:scale out:slide>
    <div class="row">
        <div class="leading" class:filled={completed}>
            {#if completed}
                <Checkmark24 style="fill : #17181f" />
            {/if}
        </div>
        &nbsp; &nbsp;
        <div class="title" class:completed-title-color={completed}>
            {title}
            <div class="crossthrough" class:crossthrough-completed={completed} />
        </div>
    </div>
    <div class="trailing" on:click={handleDelete}>
        <Delete24 style = "fill : tomato"/>
    </div>
</div>

<style>
    .row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .list-tile {
        background-color: #21212b;
        padding: 16px;
        border-radius: 20px;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
        user-select: none;
        justify-content: space-between;
    }
    .leading {
        display: flex;
        width: 25px;
        height: 25px;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: #21212b;
        border: 3px solid #fc76a1;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .filled {
        background-color: #fc76a1;
    }
    .title {
        position: relative;
        color: white;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .trailing{
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .list-tile:hover .trailing{
        opacity: 1;
    }
    .crossthrough {
        width: 0%;
        height: 2px;
        background-color: white;
        position: absolute;
        top: 12.5px;
        right: 0;
        transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .crossthrough-completed {
        width: 100%;
        left: 0;
    }
    .completed-title-color {
        color: #b6b6b9;
    }
</style>
