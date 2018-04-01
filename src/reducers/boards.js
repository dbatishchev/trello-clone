const boards = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_BOARD':
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       title: action.title,
    //       description: action.description,
    //     }
    //   ];
    case 'OPEN_CARD_MODAL':
      return {
        ...state,
        activeCard: action.card,
        isCardModalOpened: true,
      };
    case 'CLOSE_CARD_MODAL':
      return {
        ...state,
        isCardModalOpened: false,
      };
    case 'CREATE_LIST':
      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          columns: [...state.activeBoard.columns, action.list]
        }
      };
    default:
      return state
  }
};

export default boards;
