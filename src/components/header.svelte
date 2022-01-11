<script lang="ts">
    import Menu24 from "carbon-icons-svelte/lib/Menu32";
    import IbmCloudPakApplications32 from "carbon-icons-svelte/lib/IbmCloudPakApplications32";
    import DocumentExport24 from "carbon-icons-svelte/lib/DocumentExport24";
    import DocumentImport24 from "carbon-icons-svelte/lib/DocumentImport24";
    import Folder24 from "carbon-icons-svelte/lib/Folder24";
    import IconRow from "./icon_row.svelte";
    import { saveAs } from "file-saver";

    import Drawer from "./drawer.svelte";
    import { MainDataStore } from "../stores/stores";
    import { importData } from "../api/helpers";

    let navVisible = true;

    const exportData = () => {
        var file = new File(
            [JSON.stringify($MainDataStore, null, 4)],
            "exported-todos.json"
        );
        saveAs(file);
    };
</script>

<div>
    <div class="header">
        <div class="left">
            <div on:click={() => (navVisible = !navVisible)} style = "cursor : pointer">
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
        <div class="right">
            <IconRow on:click={importData}>
                <DocumentImport24 />
                &nbsp;
                <div>Import File</div>
            </IconRow>
            <IconRow on:click={exportData}>
                <DocumentExport24 />
                &nbsp;
                <div>Export Data</div>
            </IconRow>
        </div>
    </div>
    <div class="nav-row">
        <Drawer open={navVisible} />
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

    .right {
        display: flex;
        flex-direction: row;
    }

    .nav-row {
        display: flex;
        flex-direction: row;
    }
</style>
