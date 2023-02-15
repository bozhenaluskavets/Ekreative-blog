export const textAbstract = (text, length) => {
  if (text == null || text === undefined) {
    return '';
  }

  if (text.length <= length) {
    return text;
  }

  text = text.substring(0, length);

  return `${text}...`;
};
