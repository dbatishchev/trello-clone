const dashboard = (state = [], action) => {
  switch (action.type) {
    case 'PIN_DASHBOARD':
      return {
        ...state,
        isPinned: true,
      };
    case 'UNPIN_DASHBOARD':
      return {
        ...state,
        isPinned: false,
      };
    default:
      return state
  }
};

export default dashboard;
