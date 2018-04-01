const dashboard = (state = [], action) => {
  switch (action.type) {
    case 'OPEN_DASHBOARD':
      return {
        ...state,
        isOpened: true,
      };
    case 'CLOSE_DASHBOARD':
      return {
        ...state,
        isOpened: false,
      };
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
