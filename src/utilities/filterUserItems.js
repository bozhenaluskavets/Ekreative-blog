export const filterUserItems = (data, userId) => {
  const response = data.filter((item) => item.userId === userId);
  return response;
};
