<script lang="ts">
    import Menu24 from "carbon-icons-svelte/lib/Menu32";
    import IbmCloudPakApplications32 from "carbon-icons-svelte/lib/IbmCloudPakApplications32";
    import Folder24 from "carbon-icons-svelte/lib/Folder24";
    import IconRow from "./icon_row.svelte";

    import Drawer from "./drawer.svelte";

    let navVisible = true;
</script>

<div>
    <div class="header">
        <div class="left">
            <div on:click={() => (navVisible = !navVisible)}>
                <Menu24 />
            </div>
            <IconRow>
                <IbmCloudPakApplications32 />
                &nbsp;
                <div>Dashboard</div>
            </IconRow>
            <IconRow>
                <Folder24 />
                &nbsp;
                <div>Lists</div>
            </IconRow>
        </div>
        <div class="right" />
    </div>
    <div class="nav-row">
        {#if navVisible}
            <Drawer />
        {/if}
        <slot />
    </div>
</div>

<style>
    .header {
        z-index: 10;
        display: flex;
        background-color: #21212b;
        padding: 12px 16px;
        color: #b6b6b9;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
    }
    .header .left {
        display: inherit;
        justify-content: center;
        align-items: center;
    }

    .nav-row {
        display: flex;
        flex-direction: row;
    }
</style>
