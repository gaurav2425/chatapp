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
    bio: '',
  },
  token: '',
  mobiletoken: '',
};
const MyProfileInfoReducer = (state = MyProfileInfo, action) => {
  switch (action.type) {
    case 'MYPROFILEINFO':
      const {id, myprofile} = action.payload;
      //   return action.payload;
      return myprofile;

    case 'MYPROFILEBIO':
      const {myprofilebio} = action.payload;
      //   return action.payload;
      return {
        ...state,
        myprofile: {
          ...state.myprofile,
          bio: myprofilebio.myprofilebio,
        },
        // myprofile: {
        //   bio: myprofilebio.myprofilebio,
        // },
      };
      break;

    default:
      return state;
  }
};

export default MyProfileInfoReducer;
