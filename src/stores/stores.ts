import { writable } from "svelte/store";
import { DEFAULT_STORAGE_KEY } from "../api/helpers";
import DATASTORE_TEMPLATE from "../api/maindatastore_template";
import type { Empty, TodoList } from "../interfaces/global";

export const addListModal = writable(null);

export const MainDataStore = writable<TodoList>(localStorage.getItem(DEFAULT_STORAGE_KEY) ? JSON.parse(localStorage.getItem(DEFAULT_STORAGE_KEY)) : DATASTORE_TEMPLATE);


export const OpenedListId = writable<number | string | Empty>(null);

export const AppLoaded = writable<boolean>(false);