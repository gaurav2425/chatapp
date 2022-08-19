// const LoginState = {
//   email: '',
// };

const LoginState = {};
const LoginReducer = (state = LoginState, action) => {
  switch (action.type) {
    case 'ADD_LOGIN_DATA':
      const {id, data} = action.payload;
      //   return action.payload;
      return data;
    // case 'SET_PASSWORD':
    //   return data;
    //   const {password} = action.payload;
    //   return password;
    default:
      return state;
  }
};

export default LoginReducer;
