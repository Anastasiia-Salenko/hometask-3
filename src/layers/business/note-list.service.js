import { notesStorage } from "../storage/notes.storage.js";

export const noteListService = {
  getList: () => {
    return notesStorage.getList();
  },
};
