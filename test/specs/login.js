describe('Login Page', () => {
  beforeEach(() => {
    browser.url('./login');
  });

  it('should let you log in with valid credentials', () => {
    $('#username').setValue('tomsmith');
    $('#password').setValue('SuperSecretPassword!');
    $('button*=Login').click();
  });

  it('should throw error with missing credentials', () => {
    $('button*=Login').click();

    const $errorMessage = $('#flash-messages .error');
    $errorMessage.waitForExist({ timeout: 20000, interval: 3000 });
    expect($errorMessage).toHaveTextContaining('Your username is invalid!');
  });

  // it('should throw error with missing password', () => {
  //   $('#username').setValue('tomsmith');
  //   $('button*=Login').click();

  //   const $errorMessage = $('#flash-messages .error');
  //   expect($errorMessage).toHaveTextContaining('Your password is invalid!');
  // });

  // it('should throw error with missing username', () => {
  //   $('#password').setValue('SuperSecretPassword!');
  //   $('button*=Login').click();

  //   const $errorMessage = $('#flash-messages .error');
  //   expect($errorMessage).toHaveTextContaining('Your username is invalid!');
  // });

  // it('should throw error with incorrect password', () => {
  //   $('#username').setValue('tomsmith');
  //   $('#password').setValue('WrongPassword!');
  //   $('button*=Login').click();

  //   const $errorMessage = $('#flash-messages .error');
  //   expect($errorMessage).toHaveTextContaining('Your password is invalid!');
  // });
});
