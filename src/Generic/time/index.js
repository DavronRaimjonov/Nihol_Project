export const TimeResidual = (arrival, end) => {
  const arrivalData = new Date(+arrival).getDate();
  const endData = new Date(+end).getDate();
  const nowData = new Date().getDate();
  if (nowData > arrivalData) {
    return endData - nowData;
  } else {
    return endData - arrivalData;
  }
};
