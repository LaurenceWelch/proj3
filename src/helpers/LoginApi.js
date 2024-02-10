class LoginApi {
  login = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'law' && password === '123') {
          resolve('SUCCESS');
        } else {
          reject('username or password is wrong?');
        }
      }, 1000);
    });
  };
}

export default new LoginApi();
