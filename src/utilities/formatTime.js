import dateFormat, { masks } from 'dateformat';
import { timeFormat } from '../constants';

export const formatTime = (time) => {
  if (time) {
    masks.formatTime = timeFormat;
    return dateFormat(time, timeFormat);
  }
  return 'no time';
};
