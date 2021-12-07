export const UserClickAction = data => {
  return {
    type: 'USERCLICK',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
