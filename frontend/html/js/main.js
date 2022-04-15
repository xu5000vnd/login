let url = 'http://localhost:4000/api';
var App = {};
const SIGN_IN = '/sign-in';
const SIGN_UP = '/sign-up';
var validateForm = {
  login: () => {
    $('form.login-form').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: "required"
      },
      submitHandler: async function (form, e) {
        $('#login-err-msg').html('');
        e.preventDefault();
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
            utils.setLocalStorage('user', JSON.stringify(data));
            action.loginSuccess();
          })
          .catch(error => {
            // show errors out side
            if (error.response) {
              let arrError = error.response.data.errors;
              if (arrError.length) {
                const message = arrError.map(item => item.message);
                $('#login-err-msg').html(message.join('<br/>'));
              }
            }
          });
      }
    });
  },
  signup: () => {
    $('form.signup-form').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: "required"
      }
    });
  }
};

var loadComponent = {
  header: () => {
    fetch('components/header.html')
      .then(response => response.text())
      .then(text => document.getElementById('navigation').innerHTML = text);
  },
  headerAfterLogin: () => {
    fetch('components/header-after-login.html')
      .then(response => response.text())
      .then(text => document.getElementById('navigation').innerHTML = text);
  },
  [SIGN_IN]: () => {
    fetch('components/sign-in.html')
      .then(response => response.text())
      .then(text => {
        document.getElementById('main-content').innerHTML = text
        validateForm.login();
      });
  },
  [SIGN_UP]: () => {
    fetch('components/sign-up.html')
      .then(response => response.text())
      .then(text => {
        document.getElementById('main-content').innerHTML = text
        validateForm.signup();
      });
  }
};

var addRoutes = function () {
  $NB.addRoute(SIGN_UP, function (params) {
  }, 'SignUp');

  $NB.addRoute(SIGN_IN, function (params) {
  }, 'SignIn');
};

App.navigateTo = function (pageUrl, cbDone) {
  $NB.navigateTo(pageUrl, cbDone);
};
App.loadComponent = loadComponent;
App.init = function () {
  addRoutes();
  loadComponent.header();
  if (location.pathname == '/') {
    $NB.loadController(SIGN_IN, loadComponent[SIGN_IN]);
  } else {
    $NB.loadController(location.pathname, loadComponent[location.pathname]);
  }
};

App.logout = () => {
  // clear everything
  utils.setLocalStorage('user', {});
  loadComponent.header();
  loadComponent[SIGN_IN]();
}
