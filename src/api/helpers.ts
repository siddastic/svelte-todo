import { MainDataStore } from "../stores/stores";

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
                MainDataStore.update(()=>parsed);
            } catch (error) {
                alert("Invalid File!\nMake sure the file was exported from this app");
            }
        };

        fr.readAsText(this.files[0]);
        input.remove();
    });

    input.click();
};