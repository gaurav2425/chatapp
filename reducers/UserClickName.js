const ClickStateName = null;
const UserClick = (state = ClickStateName, action) => {
  switch (action.type) {
    case 'USERCLICKNAME':
      const {id, data} = action.payload;
      return data;
    default:
      return state;
  }
};

export default UserClick;
