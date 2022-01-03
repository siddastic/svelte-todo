<script lang="ts">
    import Notebook24 from "carbon-icons-svelte/lib/Notebook24";


    export let title: string;
    export let color: "primary" | "secondary" = "primary";
    const SLOTS = $$props;
    console.log(SLOTS);
</script>

<div class="drawer-item">
    <div
        class="icon"
        style="background-color: {color == 'primary' ? '#fc76a1' : '#70c4bf'};"
    >
        {#if SLOTS.$$slots}
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
</style>
