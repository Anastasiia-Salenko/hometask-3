import format from "date-fns/format/index.js";
import { DATE_FORMAT } from "../common/constants.js";

export const formatDate = (date) => format(date, DATE_FORMAT);
