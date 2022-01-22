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
      isArchived: false,
    };
    notes.push(note);

    return note;
  },
  get: (id) => {
    return notes.find((item) => item.id === id);
  },
  delete: (id) => {
    const index = notes.findIndex((item) => item.id === id);

    notes.splice(index, 1);
  },
  update: (id, { content, category, isArchived }) => {
    const index = notes.findIndex((item) => item.id === id);

    if (content) {
      notes[index].content = content;
    }

    if (category) {
      notes[index].category = category;
    }

    if (typeof isArchived === "boolean") {
      notes[index].isArchived = isArchived;
    }

    return notes[index];
  },
};
