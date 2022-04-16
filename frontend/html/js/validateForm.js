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
        e.preventDefault();
        $('#login-err-msg').html('');
        action.login(form);
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
        password: {
          required: true,
          minlength: 6
        },
        repeatpassword: {
          required: true,
          equalTo: '#password'
        }
      },
      submitHandler: async function (form, e) {
        e.preventDefault();
        $('#signup-err-msg').html('');
        action.signup(form);
      }
    });
  }
};