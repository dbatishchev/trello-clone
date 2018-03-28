const boards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
        }
      ];
    default:
      return state
  }
};

export default boards;
