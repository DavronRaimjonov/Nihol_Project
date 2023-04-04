export const formatPhone = (val) => {
  if (!val) return val;
  const phoneNumber = val.replace(/[^\d]/g, "");
  if (phoneNumber.length < 3) return phoneNumber;
  if (phoneNumber.length < 6) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }
  if (phoneNumber.length < 8) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2,5)}-${phoneNumber.slice(5, 7)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2,5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
};
