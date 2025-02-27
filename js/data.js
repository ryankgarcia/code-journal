"use strict";
const data = readEntry();
function writeData() {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('storage-data', dataJSON);
}
function readEntry() {
    const dataStorage = localStorage.getItem('storage-data');
    if (dataStorage) {
        const json = JSON.parse(dataStorage);
        return json;
    }
    else {
        return {
            view: 'entry-form',
            entries: [],
            editing: null,
            nextEntryId: 1,
        };
    }
}
