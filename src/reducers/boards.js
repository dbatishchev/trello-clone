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
    default:
      return state
  }
};

export default boards;
