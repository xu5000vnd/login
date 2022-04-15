var action = {
  login: (form) => {
    let email = $(form).find('input[name="email"]').val();
    let password = $(form).find('input[name="password"]').val();
    let payload = { email, password };
    const config = {
      crossdomain: true,
      method: 'post',
      url: `${url}/auth/signin`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
      data: payload
    }
    axios(config)
      .then(res => {
        // save data login to localstorage
        let data = res.data;
        if (data.status == 'ok') {
          utils.setLocalStorage('user', JSON.stringify(data.user));
          action.loginSuccess();
        }
      })
      .catch(error => {
        action.handleError(error, '#login-err-msg');
      });
  },

  // after login success
  loginSuccess: () => {
    loadComponent.headerAfterLogin();
    loadComponent.listUser();
    // load email to header
    $('#email-user').html(user.getEmail());
  },

  // handle error
  handleError: (error, id) => {
    // show errors out side
    if (error.response) {
      let arrError = error.response.data.errors;
      if (arrError.length) {
        const message = arrError.map(item => item.message);
        $(id).html(message.join('<br/>'));
      }
    }
  },

  // fetch list user
  fetchListUser: () => {
    const config = {
      crossdomain: true,
      method: 'get',
      url: `${url}/user`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        'authorization': `Bearer ${user.getToken()}`
      }
    }
    axios(config)
      .then(res => {
        let data = res.data;
        if (data.status == 'ok') {
          const list = data.data.map(item => `${item.id} - ${item.email}`);
          const html = list.join('<br/>');
          $('#list-user').html(html);
        }
      })
      .catch(error => {
        console.log(70, error);
      });
  },

  logout: () => {
    // clear everything
    utils.setLocalStorage('user', {});
    loadComponent.header();
    loadComponent[SIGN_IN]();
  }
};
