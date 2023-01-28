import dateFormat, { masks } from 'dateformat';

export const formatTime = (time) => {
  if (time) {
    masks.formatTime = 'dd.mm.yyyy';
    return dateFormat(time, 'formatTime');
  }
  return 'no time';
};
