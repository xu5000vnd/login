var user = {
  _data: () => {
    try {
      return JSON.parse(utils.getLocalStorage('user'));
    } catch (error) {
      return {};
    }
  },
  getToken: () => {
    return user._data.token;
  },
  getEmail: () => {
    return user._data.email;
  }
};
