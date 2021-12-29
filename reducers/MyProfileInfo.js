// const LoginState = {
//   email: '',
// };

const MyProfileInfo = {
  myprofile: {
    Friends: [],
    Notifications: [],
    PendingFriends: [],
    RequestSent: [],
    _id: '',
    name: '',
    user: '',
    username: '',
  },
  token: '',
};
const MyProfileInfoReducer = (state = MyProfileInfo, action) => {
  switch (action.type) {
    case 'MYPROFILEINFO':
      const {id, myprofile} = action.payload;
      //   return action.payload;
      return myprofile;
    // case 'SET_PASSWORD':
    //   return data;
    //   const {password} = action.payload;
    //   return password;
    default:
      return state;
  }
};

export default MyProfileInfoReducer;
