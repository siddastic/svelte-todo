import type { TodoList } from "../interfaces/global";

const DATASTORE_TEMPLATE: TodoList = {
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
        },
        {
            key: 2,
            list: [],
        },
        {
            key: 3,
            list: [],
        }
    ],
};

export default DATASTORE_TEMPLATE;