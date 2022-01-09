import { writable } from "svelte/store";
import type { Empty, TodoList } from "../interfaces/global";

export const addListModal = writable(null);

export const MainDataStore = writable<TodoList>({
    appVersion: "0.0.1",
    exportDataVersion: 1,
    titles: [

    ],
    items: [
        
    ],
});


export const OpenedListId = writable<number | string | Empty>(null);