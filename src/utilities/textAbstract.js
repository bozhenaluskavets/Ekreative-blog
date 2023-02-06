export const textAbstract = (text, length) => {
  if (text == null || text === undefined) {
    return '';
  }
  if (text.length <= length) {
    return text;
  }
  text = text.substring(0, length);
  const last = text.lastIndexOf(' ');
  text = text.substring(0, last);
  return `${text}...`;
};
