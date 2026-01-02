import { format } from 'timeago.js';

export default function dateFormatter(date, lang = 'en_US') {
  return format(date, lang);
}
