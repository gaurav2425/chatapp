export const MyProfileInfoAction = data => {
  return {
    type: 'MYPROFILEINFO',
    payload: {
      id: new Date().getTime().toString(),
      myprofile: data,
    },
  };
};
