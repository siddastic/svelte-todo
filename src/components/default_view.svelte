<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { addListModal, AppLoaded } from "../stores/stores";
    import { bind } from "svelte-simple-modal";
    import { slide } from "svelte/transition";
    import CreateListModal from "./create_list_modal.svelte";
    import { clearAllAppData, importData } from "../api/helpers";

    let title = "Svelte Todo";
    let titleElement: HTMLElement;
    let animationId;
    let primaryAnimationColor: "#fc76a1" | "white" = "#fc76a1";
    let evenIteration = true;
    onMount(() => {
        animationId = setInterval(runAnimation, 700);
    });

    const runAnimation = () => {
        titleElement
            .querySelectorAll(".title-part")
            .forEach((element: HTMLElement, index) => {
                if (index % 2 == 0) {
                    element.style.color = evenIteration
                        ? primaryAnimationColor
                        : "white";
                } else {
                    element.style.color = evenIteration
                        ? "white"
                        : primaryAnimationColor;
                }
            });
        evenIteration = !evenIteration;
    };

    onDestroy(() => {
        clearInterval(animationId);
    });

    const showAddModal = () =>
        // @ts-ignore
        addListModal.set(bind(CreateListModal));

    window.onload = () => {
        setTimeout(() => AppLoaded.update(() => true), 3500);
    };
</script>

<div class="main" out:slide>
    <div class="title" bind:this={titleElement}>
        {#each title.split("") as t}
            <span class="title-part">{t}</span>
        {/each}
    </div>
    {#if $AppLoaded}
        <div class="loaded-content">
            <div class="tagline">A Todo list app #MadeWithSvelte</div>
            <br />
            <hr color="#21212b" />
            <div class="body">
                <br />
                Svelte-todo utilizes browser's local storage for storing you data,
                you can also Import / Export your data as json
                <br />
                <br />
                Start By
                <span class="highlight" on:click={() => showAddModal()}
                    >Creating a New list</span
                >
                from left drawer or
                <span class="highlight" on:click={importData}>Import</span> an existing
                svelte-todo exported file
            </div>
            <hr color="#21212b" />
            <br />
            <div class="link-row">
                <div class="link">
                    Made With - <a href="https://svelte.dev/" target="_blank"
                        >Svelte</a
                    >
                    and
                    <a href="https://www.typescriptlang.org/" target="_blank"
                        >TypeScript</a
                    >
                </div>
                <div class="link">
                    Source Code - <a
                        href="https://github.com/siddastic/svelte-todo"
                        target="_blank">Github</a
                    >
                </div>
            </div>
            <br />
            <div class="link-row">
                <div class="link">
                    Created By - <a
                        href="https://github.com/siddastic"
                        target="_blank">siddastic (Siddhant Sharma)</a
                    >
                </div>
                <div class="link">
                    Documentation - <a
                        href="https://github.com/siddastic/svelte-todo#readme"
                        target="_blank">View</a
                    >
                </div>
            </div>
            <br />
            <div class="link-row">
                <div class="link">
                    Settings - <span
                        class="highlight"
                        on:click={() => {
                            if (
                                confirm(
                                    "All lists and their todos will be deleted\nMake sure to Export data before deleting\nAre you sure to delete?"
                                )
                            ) {
                                clearAllAppData();
                            }
                        }}>Clear All Data</span
                    >
                </div>
                <div class="link">
                    UI Inspiration - <a
                        href="https://dribbble.com/shots/15185058-Collection-Tasks"
                        target="_blank">Collection Tasks by Oliver Cederborg</a
                    >
                </div>
            </div>
        </div>
    {:else}
        <div class="loading-state">
            <div class="loading-indicator">
                Loading...
                <div class="crossthrough" />
            </div>
        </div>
    {/if}
</div>

<style>
    .main {
        width: 70vw;
        color: #b6b6b9;
        position: relative;
    }
    .body {
        min-height: 400px;
    }
    .title {
        font-family: "Just Another Hand", cursive;
        font-size: 125px;
        font-weight: 500;
    }
    a,
    .highlight {
        color: #fc76a1;
        cursor: pointer;
    }
    .link-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .loading-state {
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-indicator {
        position: relative;
        font-family: "Roboto", cursive;
        font-size: 35px;
    }
    .crossthrough {
        width: 0%;
        height: 2px;
        background-color: white;
        position: absolute;
        top: 19.5px;
        /* right: 0; */
        animation: indicator-anim 1.4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
    }
    @keyframes indicator-anim {
        0% {
            width: 0%;
            left: 0;
        }
        50% {
            width: 100%;
            left: 0;
        }
        75% {
            width: 100%;
            right: 0;
        }
        100% {
            width: 0%;
            right: 0;
        }
    }
</style>
