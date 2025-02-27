interface Data {
  view: string;
  entries: [];
  editing: null;
  nextEntryId: number;
}

const data = readEntry();

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('storage-data', dataJSON);
}

function readEntry(): Data {
  const dataStorage = localStorage.getItem('storage-data');
  if (dataStorage) {
    const json = JSON.parse(dataStorage);
    return json;
  } else {
    return {
      view: 'entry-form',
      entries: [],
      editing: null,
      nextEntryId: 1,
    };
  }
}
