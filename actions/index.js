const incNumber = () => {
  return {
    type: 'INCREMENT',
  };
};

const decNumber = () => {
  return {
    type: 'DECREMENT',
  };
};

// const setEmail = data => {
//   return {
//     type: 'SETEMAIL',
//     payload: {
//       id: new Date.getTime().toString(),
//       data: data,
//     },
//   };
// };

// export {incNumber, decNumber, setEmail};
export {incNumber, decNumber};
