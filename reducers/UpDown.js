const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
};

// const LoginState = {
//   email: '',
//   password: '',
// };

// const Login = (state = LoginState, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       const {id, data} = action.payload;
//       return {
//         ...state,
//         data: [
//           ...state.email,
//           {
//             id: id,
//             data: data,
//           },
//         ],
//       };

//     default:
//       return state;
//   }
// };
export {changeTheNumber};
