// export const SignupAction = data => {
//   return {
//     type: 'ADD_SIGNUP_DATA',
//     payload: {
//       id: new Date().getTime().toString(),
//       data: data,
//     },
//   };
// };

export const SignupUsernameAction = username => {
  return {
    type: 'MYUSERNAME',
    payload: {
      id: new Date().getTime().toString(),
      myusername: username,
    },
  };
};

export const SignupemailAction = email => {
  return {
    type: 'MYEMAIL',
    payload: {
      id: new Date().getTime().toString(),
      myemail: email,
    },
  };
};

export const SignupsecretAction = secret => {
  return {
    type: 'MYSECRET',
    payload: {
      id: new Date().getTime().toString(),
      mysecret: secret,
    },
  };
};

export const SignuppasswordAction = password => {
  return {
    type: 'MYPASSWORD',
    payload: {
      id: new Date().getTime().toString(),
      mypassword: password,
    },
  };
};

export const SignupnameAction = name => {
  return {
    type: 'MYNAME',
    payload: {
      id: new Date().getTime().toString(),
      myname: name,
    },
  };
};

export const SignupdobAction = dob => {
  return {
    type: 'MYDOB',
    payload: {
      id: new Date().getTime().toString(),
      mydob: dob,
    },
  };
};

export const SignupverifiedAction = verified => {
  return {
    type: 'MYVERIFIED',
    payload: {
      id: new Date().getTime().toString(),
      myverified: verified,
    },
  };
};
