import { v4 as uuidv4 } from "uuid";
import { prepopulatedNotes } from "./prepopulated-notes.js";
import { extractDatesFromContent } from "../../utils/extractDatesFromContent.js";
import { formatDate } from "../../utils/formatDate.js";

const notes = prepopulatedNotes.map((item) => ({
  ...item,
  dates: extractDatesFromContent(item.content),
}));

export const notesStorage = {
  getList: () => {
    return notes;
  },
  create: ({ content, category, dates }) => {
    const note = {
      content: content,
      category: category,
      id: uuidv4(),
      created: formatDate(new Date()),
      isArchived: false,
      dates: dates,
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
  update: (id, { content, category, isArchived, dates }) => {
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

    if (dates) {
      notes[index].dates = dates;
    }

    return notes[index];
  },
};
