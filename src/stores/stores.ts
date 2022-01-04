import { writable } from "svelte/store";
import type { TodoList } from "../interfaces/global";

export const addListModal = writable(null);

export const MainDataStore = writable<TodoList>({
    appVersion: "0.0.1",
    exportDataVersion: 1,
    titles: [
        {
            id : 0,
            millisecondsSinceEpoch : 3235245345345,
            title : "Short Term Goals",
        },
        {
            id : 1,
            millisecondsSinceEpoch : 3235245345345,
            title : "Long Term Goals",
        },
        {
            id : 2,
            millisecondsSinceEpoch : 3235245345345,
            title : "College",
        },
        {
            id : 3,
            millisecondsSinceEpoch : 3235245345345,
            title : "JS IDE",
        },
    ],
    items: [],
});