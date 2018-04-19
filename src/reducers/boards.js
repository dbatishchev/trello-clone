import map from 'lodash/map';
import {CREATE_CARD, MOVE_CARD, CLOSE_CARD_MODAL, CREATE_LIST, UPDATE_LIST, OPEN_CARD_MODAL} from '../actions';

// https://github.com/reactjs/redux/blob/master/docs/recipes/reducers/ImmutableUpdatePatterns.md

const getCardInfoById = (state, cardId) => {
  const boardsState = state.boards;
  const card = boardsState.cardsById[cardId];

  if (!card) {
    return null;
  }

  return {
    ...card,
    assignees: map(card.assignees, a => boardsState.users[a]),
    tags: map(card.tags, t => boardsState.tags[t]),
    logs: map(card.logs, l => {
      return {
        ...boardsState.logs[l],
        author: boardsState.users[boardsState.logs[l].author],
      }
    }),
  };
};

export const getSelectedCard = (state) => {
  if (!state.boards.selectedCardId) {
    return;
  }

  return getCardInfoById(state, state.boards.selectedCardId);
};

export const getSelectedBoard = (state) => {
  const boardsState = state.boards;

  let selectedBoard = {
    ...boardsState.boardsById[boardsState.selectedBoardId],
    ...boardsState.boardsDetailsById[boardsState.selectedBoardId],
  };

  selectedBoard = {
    ...selectedBoard,
    lists: map(selectedBoard.lists, l => {
      const list = {...boardsState.listsById[l], id: l};
      list.cards = map(list.cards, cId => getCardInfoById(state, cId));

      return list;
    }),
  };

  return selectedBoard;
};

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
      selectedBoardDetails.lists = {
        ...selectedBoardDetails.lists,
        listId,
      };

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
    case CREATE_CARD:
      const card = action.card;

      return {
        ...state,
        listsById: {
          ...state.listsById,
          [action.list.id]: {
            ...state.listsById[action.list.id],
            cards: [...state.listsById[action.list.id].cards, card.id],
          }
        },
        cardsById: {
          ...state.cardsById,
          [card.id]: card,
        }
      };

    case MOVE_CARD:
      const {cardId, sourceListId, destinationListId, sourceIndex, destinationIndex} = action;

      if (destinationListId === sourceListId) {
        const list = state.listsById[sourceListId];
        let cards = list.cards.filter(c => c !== cardId);
        cards.splice(destinationIndex, 0, cardId);

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
