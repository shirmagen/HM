export const getFromLocalStorage = (key: string) => localStorage.getItem(key);
export const setLocalStorage = (key: string, value: any ) => localStorage.setItem(key, value);
export const removeFromLocalStorage = (key: string) => localStorage.removeItem(key);
