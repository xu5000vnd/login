var loadComponent = {
  header: () => {
    fetch('components/header.html')
      .then(response => response.text())
      .then(text => document.getElementById('navigation').innerHTML = text);
  },
  headerAfterLogin: () => {
    fetch('components/header-after-login.html')
      .then(response => response.text())
      .then(text => {
        // check login
        if (user.getId()) {
          document.getElementById('navigation').innerHTML = text;
          // load email to header
          $('#email-user').html(user.getEmail());
        } else {
          loadComponent.header();
        }
      });
  },
  [SIGN_IN]: () => {
    fetch('components/sign-in.html')
      .then(response => response.text())
      .then(text => {
        document.getElementById('main-content').innerHTML = text;
        validateForm.login();
      });
  },
  [SIGN_UP]: () => {
    fetch('components/sign-up.html')
      .then(response => response.text())
      .then(text => {
        document.getElementById('main-content').innerHTML = text;
        validateForm.signup();
      });
  },
  [LIST_USER]: () => {
    fetch('components/list-user.html')
      .then(response => response.text())
      .then(text => {
        // check login
        if (user.getId()) {
          document.getElementById('main-content').innerHTML = text;
          action.fetchListUser();
        } else {
          loadComponent[SIGN_IN]();
        }
      });
  },
};