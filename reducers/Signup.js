// const LoginState = {
//   email: '',
// };

const SignupState = {
  username: '',
  name: '',
  email: '',
  password: '',
  secret: '',
  verified: false,
  dob: '',
  otp: '',
};
const SignupReducer = (state = SignupState, action) => {
  switch (action.type) {
    case 'ADD_SIGNUP_DATA':
      const {id, data} = action.payload;
      //   return action.payload;
      return data;

    case 'MYUSERNAME':
      const {myusername} = action.payload;

      return {
        ...state,

        username: myusername.myusername,
      };

    case 'MYEMAIL':
      const {myemail} = action.payload;

      return {
        ...state,

        email: myemail.myemail,
      };

    case 'MYSECRET':
      const {mysecret} = action.payload;

      return {
        ...state,

        secret: mysecret.mysecret,
      };

    case 'MYPASSWORD':
      const {mypassword} = action.payload;

      return {
        ...state,

        password: mypassword.mypassword,
      };

    case 'MYNAME':
      const {myname} = action.payload;

      return {
        ...state,

        name: myname.myname,
      };

    case 'MYDOB':
      const {mydob} = action.payload;

      return {
        ...state,

        dob: mydob.mydob,
      };

    case 'MYVERIFIED':
      const {myverified} = action.payload;

      return {
        ...state,

        verified: myverified.myverified,
      };

      break;

    default:
      return state;
  }
};

export default SignupReducer;
