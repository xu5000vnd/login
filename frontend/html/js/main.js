var App = {};

var addRoutes = function () {
  $NB.addRoute('/sign-up', function (params) {
    console.log(5, 'signup');
    validateForm.signup();
    loadComponent[location.pathname]()
  }, 'SignUp');

  $NB.addRoute('/sign-in', function (params) {
    console.log(10, 'login');
    validateForm.login();
    loadComponent[location.pathname]()
  }, 'SignIn');
};

var validateForm = {
  login: () => {
    $('form.login-form').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: "required"
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
  "/sign-in": () => {
    fetch('components/sign-in.html')
      .then(response => response.text())
      .then(text => document.getElementById('main-content').innerHTML = text);
  },
  "/sign-up": () => {
    fetch('components/sign-up.html')
      .then(response => response.text())
      .then(text => document.getElementById('main-content').innerHTML = text);
  }
}

App.navigateTo = function (pageUrl) {
  $NB.navigateTo(pageUrl);
};

App.init = function () {
  addRoutes();
  $NB.loadController(location.pathname);

  // load header
  loadComponent.header();
  // load content
  loadComponent[location.pathname]();
};

