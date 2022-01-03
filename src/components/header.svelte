<script lang="ts">
    import Menu24 from "carbon-icons-svelte/lib/Menu32";
    import IbmCloudPakApplications32 from "carbon-icons-svelte/lib/IbmCloudPakApplications32";
    import Folder24 from "carbon-icons-svelte/lib/Folder24";
    import IconRow from "./icon_row.svelte";
</script>

<div class="header">
    <div class="left">
        <Menu24 />
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

<style>
    .header {
        display: flex;
        background-color: #21212b;
        padding: 12px 16px;
        color: #b6b6b9;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .header .left {
        display: inherit;
        justify-content: center;
        align-items: center;
    }
</style>
