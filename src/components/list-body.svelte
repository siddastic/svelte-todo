<script lang="ts">
    import ChevronLeft24 from "carbon-icons-svelte/lib/ChevronLeft24";
    import OverflowMenuHorizontal24 from "carbon-icons-svelte/lib/OverflowMenuHorizontal24";
    import ListItemTile from "./list-item-tile.svelte";
    import AddTaskTile from "./add_task_tile.svelte";

    export let title = "School";
</script>

<div class="list-body">
    <div class="content">
        <div class="header row">
            <div class="title row">
                <div class="icon">
                    <ChevronLeft24 />
                </div>
                &nbsp; &nbsp;
                {title}
            </div>
            <div class="options">
                <OverflowMenuHorizontal24 />
            </div>
        </div>
        <br />
        <AddTaskTile />
        <br />
        <br />
        <span style="font-weight: 500;">Tasks - 8</span>
        <br />
        <br />
        <ListItemTile />
        <ListItemTile completed={true} title="Return Books To library" />
        <ListItemTile completed={false} title="Group Project" />
    </div>
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
</style>
