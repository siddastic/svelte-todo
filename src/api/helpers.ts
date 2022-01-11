import { MainDataStore } from "../stores/stores";
import DATASTORE_TEMPLATE from "./maindatastore_template";

export const DEFAULT_STORAGE_KEY = "svelte-todo-maindatastore";

export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export const importData = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    document.body.appendChild(input);

    input.addEventListener("change", function () {
        var fr = new FileReader();
        fr.onload = function () {
            const result = fr.result;
            try {
                const parsed = JSON.parse(result.toString());
                MainDataStore.update(() => parsed);
            } catch (error) {
                alert("Invalid File!\nMake sure the file was exported from this app");
            }
        };

        fr.readAsText(this.files[0]);
        input.remove();
    });

    input.click();
};

export const saveCurrentStoreDataToLocalStorage = () => {
    // to read value from maindatastore
    MainDataStore.update(storeData => {
        localStorage.setItem(DEFAULT_STORAGE_KEY, JSON.stringify(storeData));
        return storeData;
    });
};

export const clearAllAppData = () => {
    MainDataStore.update(() => {
        localStorage.setItem(DEFAULT_STORAGE_KEY, JSON.stringify(DATASTORE_TEMPLATE));
        return DATASTORE_TEMPLATE;
    });
};