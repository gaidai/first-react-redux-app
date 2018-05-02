function authenticate (login, password) {
  if(login ==='login' && password === 'password'){
    return 'You are loggined!';
  } else {
    return 'Login is invalid ';
  }
}

