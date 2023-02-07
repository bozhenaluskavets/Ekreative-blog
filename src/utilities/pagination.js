export const addPagination = ({ list = 0, page = 1, perPage = 8 }) => {
  const newList = list.reverse();

  const totalPages = Math.ceil(newList.length / perPage);
  const itemOffset = ((page - 1) * perPage) % newList.length;
  const endOffset = itemOffset + perPage;

  const data = newList.slice(itemOffset, endOffset);

  return {
    totalPages,
    currentPage: page,
    perPage,
    data,
  };
};

// fix const newList = list.reverse();
