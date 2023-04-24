export const getLocal = (key) => {
  try {
    const getStore = localStorage.getItem(key);
    if (!getStore) return undefined;
    return JSON.parse(getStore);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const setLocal = (key, value) => {
  try {
    const data = JSON.stringify(value);
    return localStorage.setItem(key, data);
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = (key) => {
  return localStorage.removeItem(key);
};
