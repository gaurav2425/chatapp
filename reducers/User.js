// const LoginState = {
//   email: '',
// };

const SignUpState = null;
const UserReducer = (state = SignUpState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
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

export default UserReducer;
