import { NOTE_CATEGORIES } from "../../common/constants.js";
import { notesStorage } from "../storage/notes.storage.js";

export const noteStatisticsService = {
  get: () => {
    const notes = notesStorage.getList();
    return [
      {
        category: NOTE_CATEGORIES.TASK,
        active: notes.filter(
          (item) => item.category === NOTE_CATEGORIES.TASK && !item.isArchived
        ).length,
        archived: notes.filter(
          (item) => item.category === NOTE_CATEGORIES.TASK && item.isArchived
        ).length,
      },
      {
        category: NOTE_CATEGORIES.IDEA,
        active: notes.filter(
          (item) => item.category === NOTE_CATEGORIES.IDEA && !item.isArchived
        ).length,
        archived: notes.filter(
          (item) => item.category === NOTE_CATEGORIES.IDEA && item.isArchived
        ).length,
      },
      {
        category: NOTE_CATEGORIES.RANDOM_THOUGHT,
        active: notes.filter(
          (item) =>
            item.category === NOTE_CATEGORIES.RANDOM_THOUGHT && !item.isArchived
        ).length,
        archived: notes.filter(
          (item) =>
            item.category === NOTE_CATEGORIES.RANDOM_THOUGHT && item.isArchived
        ).length,
      },
    ];
  },
};
