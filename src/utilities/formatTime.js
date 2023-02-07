import dateFormat, { masks } from 'dateformat';

export const formatTime = (time) => {
  if (time) {
    masks.formatTime = 'dd.mm.yyyy';
    return dateFormat(time, 'dd.mm.yyyy');
  }
  return 'no time';
};

// fix add formatTime to constants;
