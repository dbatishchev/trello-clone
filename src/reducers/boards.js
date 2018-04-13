import {MOVE_CARD, CLOSE_CARD_MODAL, CREATE_LIST, OPEN_CARD_MODAL} from '../actions';

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
    case MOVE_CARD:
      const {cardId, sourceListId, destinationListId, sourceIndex, destinationIndex} = action;

      if (destinationListId === sourceListId) {
        const list = state.listsById[sourceListId];
        let cards = Array.from(list.cards);
        const [removed] = cards.splice(sourceIndex, 1);
        cards.splice(destinationIndex, 0, removed);

        console.log('zzzzzz', cards);

        state.listsById[sourceListId] = {...list, cards}
      } else {

      }
    default:
      return state
  }
};

export default boards;
