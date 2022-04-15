var utils = {
  setLocalStorage: (name, value) => {
    window.localStorage.setItem(name, value);
  },
  getLocalStorage: (name) => {
    return window.localStorage.getItem(name);
  }
};
