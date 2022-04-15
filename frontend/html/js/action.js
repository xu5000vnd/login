var action = {
  loginSuccess: () => {
    loadComponent.headerAfterLogin();
    // load email to header
    $('#email-user').html(user.getEmail());
  }
}