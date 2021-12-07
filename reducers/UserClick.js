const ClickState = null;
const UserClick = (state = ClickState, action) => {
  switch (action.type) {
    case 'USERCLICK':
      const {id, data} = action.payload;
      return data;
    default:
      return state;
  }
};

export default UserClick;
