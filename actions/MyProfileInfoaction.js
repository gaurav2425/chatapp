export const MyProfileInfoAction = (data, bio) => {
  return {
    type: 'MYPROFILEINFO',
    payload: {
      id: new Date().getTime().toString(),
      myprofile: data,
    },
  };
};

export const MyProfileBioAction = bio => {
  return {
    type: 'MYPROFILEBIO',
    payload: {
      id: new Date().getTime().toString(),
      myprofilebio: bio,
    },
  };
};
