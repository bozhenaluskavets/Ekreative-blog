export const addPagination = ({ list = 0, page = 1, perPage = 8 }) => {
  const totalPages = Math.ceil(list.length / perPage);
  const itemOffset = ((page - 1) * perPage) % list.length;
  const endOffset = itemOffset + perPage;

  const data = list.slice(itemOffset, endOffset);

  return {
    totalPages,
    currentPage: page,
    perPage,
    data,
  };
};
