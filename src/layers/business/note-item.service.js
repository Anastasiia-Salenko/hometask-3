import { notesStorage } from "../storage/notes.storage.js";

export const noteItemService = {
  get: (id) => {
    return notesStorage.get(id);
  },
  delete: (id) => {
    notesStorage.delete(id);
  },
  update: (id, { content, category }) => {
    return notesStorage.update(id, { content, category });
  },
};
