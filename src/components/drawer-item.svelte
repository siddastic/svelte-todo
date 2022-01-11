<script lang="ts">
    import Notebook24 from "carbon-icons-svelte/lib/Notebook24";

    export let title: string;
    export let color: "primary" | "secondary" = "primary";
    export let isOpen: boolean = false;
    const PROPS = $$props;
</script>

<div class="drawer-item" on:click class:open={isOpen}>
    <div
        class="icon"
        style="background-color: {color == 'primary' ? '#fc76a1' : '#70c4bf'};"
    >
        {#if PROPS.$$slots}
            <slot />
        {:else}
            <Notebook24 />
        {/if}
    </div>
    &nbsp; &nbsp;
    <div class="title">{title}</div>
</div>

<style>
    .drawer-item {
        display: flex;
        align-items: center;
        transition: all 0.25s;
        padding: 16px;
        padding-left: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .drawer-item:hover {
        background-color: #272732;
    }
    .icon {
        border-radius: 12px;
        padding: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .open,
    .open:hover {
        background-color: #17181f;
    }
</style>
