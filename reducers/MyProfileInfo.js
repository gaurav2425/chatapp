// const LoginState = {
//   email: '',
// };

const MyProfileInfo = {
  email: 'gauravbbb@gmail.com',
};
const MyProfileInfoReducer = (state = MyProfileInfo, action) => {
  switch (action.type) {
    case 'MYPROFILEINFO':
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

export default MyProfileInfoReducer;
