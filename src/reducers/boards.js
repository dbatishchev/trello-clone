const boards = (state = [], action) => {
  // https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456

  switch (action.type) {
    case 'OPEN_CARD_MODAL':
      return {
        ...state,
        selectedCardId: action.card.id,
        isCardModalOpened: true,
      };
    case 'CLOSE_CARD_MODAL':
      return {
        ...state,
        isCardModalOpened: false,
      };
    case 'CREATE_LIST':
      const columnId = action.column.id;
      const selectedBoardDetails = state.boardsDetailsById[state.selectedBoardId];
      selectedBoardDetails.columns = [
        ...selectedBoardDetails.columns,
        columnId,
      ];
      return {
        ...state,
        boardsDetailsById: {
          ...state.boardsDetailsById,
          [state.selectedBoardId]: selectedBoardDetails,
        },
        columnsById: {
          ...state.columnsById,
          [columnId]: action.column,
        },
      };
    default:
      return state
  }
};

export default boards;
