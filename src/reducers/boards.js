import {MOVE_CARD, CLOSE_CARD_MODAL, CREATE_LIST, UPDATE_LIST, OPEN_CARD_MODAL} from '../actions';

// https://github.com/reactjs/redux/blob/master/docs/recipes/reducers/ImmutableUpdatePatterns.md

const boards = (state = [], action) => {
  // https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456
  switch (action.type) {
    case OPEN_CARD_MODAL:
      return {
        ...state,
        selectedCardId: action.card.id,
        isCardModalOpened: true,
      };
    case CLOSE_CARD_MODAL:
      return {
        ...state,
        isCardModalOpened: false,
      };
    case CREATE_LIST:
      const listId = action.list.id;
      const selectedBoardDetails = state.boardsDetailsById[state.selectedBoardId];
      selectedBoardDetails.lists = [
        ...selectedBoardDetails.lists,
        listId,
      ];

      return {
        ...state,
        boardsDetailsById: {
          ...state.boardsDetailsById,
          [state.selectedBoardId]: selectedBoardDetails,
        },
        listsById: {
          ...state.listsById,
          [listId]: action.list,
        },
      };
    case UPDATE_LIST:
      const {list, data} = action;

      return {
        ...state,
        listsById: {
          ...state.listsById,
          [list.id]: {
            ...state.listsById[list.id],
            ...data
          },
        },
      };
    case MOVE_CARD:
      const {cardId, sourceListId, destinationListId, sourceIndex, destinationIndex} = action;

      if (destinationListId === sourceListId) {
        const list = state.listsById[sourceListId];
        let cards = list.cards.filter(c => c !== cardId);
        cards.splice(destinationIndex, 0, cardId);

        console.log(cards);

        return {
          ...state,
          listsById: {
            ...state.listsById,
            [sourceListId]: {...list, cards}
          }
        };
      } else {

      }
    default:
      return state
  }
};

export default boards;
