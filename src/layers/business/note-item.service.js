import { notesStorage } from "../storage/notes.storage.js";

export const noteItemService = {
  get: (id) => {
    return notesStorage.get(id);
  },
};
