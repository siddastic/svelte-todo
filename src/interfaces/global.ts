export interface TodoList{
    titles : TodoListTitle[];
    exportDataVersion : 1,
    appVersion : '0.0.1';
    items : TodoListItems[];
}

interface TodoListTitle{
    title : string;
    id : number | string;
    millisecondsSinceEpoch : number;
}

interface TodoListItems{
    key : number | string;
    list : TodoListItem;
}

interface TodoListItem{
    title : string;
    millisecondsSinceEpoch : number;
    completed : boolean;
}