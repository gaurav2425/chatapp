export const UserData = data => {
  return {
    type: 'ADD_DATA',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const UserPassword = data => {
  return {
    type: 'SET_PASSWORD',
    payload: {
      id: new Date().getTime().toString(),
      password: data,
    },
  };
};

export const LoginAction = data => {
  return {
    type: 'ADD_LOGIN_DATA',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
