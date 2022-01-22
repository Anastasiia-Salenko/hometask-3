import { extractDatesFromContent } from "../../utils/extractDatesFromContent.js";
import { notesStorage } from "../storage/notes.storage.js";

export const noteListService = {
  getList: () => {
    return notesStorage.getList();
  },
  create: ({ content, category }) => {
    return notesStorage.create({
      content,
      category,
      dates: extractDatesFromContent(content),
    });
  },
};
