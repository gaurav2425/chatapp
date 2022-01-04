export const UserClickNameAction = data => {
  return {
    type: 'USERCLICKNAME',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
