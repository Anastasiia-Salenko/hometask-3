import { prepopulatedNotes } from "./prepopulated-notes.js";

const notes = [...prepopulatedNotes];

export const notesStorage = {
  getList: () => {
    return notes;
  },
};
