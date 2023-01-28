export const filterList = (list) => {
  return list.filter((item) => {
    if (!item.createdAt || !item.title) {
      return false;
    }
    return true;
  });
};
