import { writable } from "svelte/store";
import type { Empty, TodoList } from "../interfaces/global";

export const addListModal = writable(null);

export const MainDataStore = writable<TodoList>({
    appVersion: "0.0.1",
    exportDataVersion: 1,
    titles: [
        {
            id: 0,
            millisecondsSinceEpoch: 3235245345345,
            title: "Short Term Goals",
        },
        {
            id: 1,
            millisecondsSinceEpoch: 3235245345345,
            title: "Long Term Goals",
        },
        {
            id: 2,
            millisecondsSinceEpoch: 3235245345345,
            title: "College",
        },
        {
            id: 3,
            millisecondsSinceEpoch: 3235245345345,
            title: "JS IDE",
        },
    ],
    items: [
        {
            key: 0,
            list: [
                {
                    completed: false,
                    millisecondsSinceEpoch: 4545454,
                    title: "First Todo",
                    id: 3545,
                }
            ],
        },
        {
            key: 1,
            list: [
                {
                    completed: true,
                    millisecondsSinceEpoch: 4545454,
                    title: "Another Todo",
                    id: 3545,
                },
                {
                    completed: true,
                    millisecondsSinceEpoch: 4545454,
                    title: "Second Todo",
                    id: 354445,
                }
            ],
        }
    ],
});


export const OpenedListId = writable<number | string | Empty>(0);