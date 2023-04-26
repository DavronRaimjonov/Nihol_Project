export const TimeResidual = (arrival, end) => {
  const arrivalData = new Date(+arrival).getDate();
  const endData = new Date(+end).getDate();
  const nowData = new Date().getDate();
  if (nowData > arrivalData) {
    return endData - nowData;
  }
  return endData - nowData;
};

export const userDate = (data) => {
  const date = new Date(+data);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
