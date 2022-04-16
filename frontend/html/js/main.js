var App = {};
var addRoutes = function () {
  $NB.addRoute(SIGN_UP, function (params) {
  }, 'SignUp');

  $NB.addRoute(SIGN_IN, function (params) {
  }, 'SignIn');

  $NB.addRoute(LIST_USER, function (params) {
  }, 'ListUser');
};

App.navigateTo = function (pageUrl, cbDone) {
  $NB.navigateTo(pageUrl, cbDone);
};
App.init = function () {
  addRoutes();
  // check login
  if (user.getId()) {
    loadComponent.headerAfterLogin();
    App.navigateTo(LIST_USER, loadComponent[LIST_USER])
  } else {
    loadComponent.header();
    if (location.pathname == '/') {
      App.navigateTo(SIGN_IN, loadComponent[SIGN_IN])
    } else {
      $NB.loadController(location.pathname, loadComponent[location.pathname]);
    }
  }
};
