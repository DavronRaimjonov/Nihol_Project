export const userDate = (data) => {
  const date = new Date(+data);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
