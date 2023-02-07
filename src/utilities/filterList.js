export const filterList = (list) => {
  return list.filter((item) => {
    if (!item.createdAt || !item.title) {
      return false;
    }
    return true;
  });
};

// fix
/*
export const filterList = (list) => list.filter((item) => !item.createdAt || !item.title);

*/
