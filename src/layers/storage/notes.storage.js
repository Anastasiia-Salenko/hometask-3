import { v4 as uuidv4 } from "uuid";
import { prepopulatedNotes } from "./prepopulated-notes.js";

const notes = [...prepopulatedNotes];

export const notesStorage = {
  getList: () => {
    return notes;
  },
  create: ({ content, category }) => {
    const note = {
      content: content,
      category: category,
      id: uuidv4(),
      created: new Date(),
    };
    notes.push(note);

    return note;
  },
};
