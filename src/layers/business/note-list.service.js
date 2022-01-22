import { extractDatesFromContent } from "../../utils/extractDatesFromContent.js";
import { notesStorage } from "../storage/notes.storage.js";

export const noteListService = {
  getList: ({ isArchived }) => {
    const notes =
      typeof isArchived === "boolean"
        ? notesStorage
            .getList()
            .filter((item) => item.isArchived === isArchived)
        : notesStorage.getList();

    return notes;
  },
  create: ({ content, category }) => {
    return notesStorage.create({
      content,
      category,
      dates: extractDatesFromContent(content),
    });
  },
};
