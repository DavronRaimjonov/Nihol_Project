export const TimeResidual = (arrival, end) => {
  const arrivalData = new Date(+arrival).getDate();
  const endData = new Date(+end).getDate();
  const nowData = new Date().getDate();
  console.log(arrivalData, endData, nowData);
  if (nowData > arrivalData) {
    return endData - nowData;
  }
  return endData - nowData;
};
