export const OPEN_DASHBOARD = 'OPEN_DASHBOARD';
export const CLOSE_DASHBOARD = 'CLOSE_DASHBOARD';
export const PIN_DASHBOARD = 'PIN_DASHBOARD';
export const UNPIN_DASHBOARD = 'UNPIN_DASHBOARD';
export const OPEN_CARD_MODAL = 'OPEN_CARD_MODAL';
export const CLOSE_CARD_MODAL = 'CLOSE_CARD_MODAL';
export const CREATE_CARD = 'CREATE_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const CREATE_LIST = 'CREATE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';

export const openDashboard = card => ({
  type: OPEN_DASHBOARD,
});

export const closeDashboard = card => ({
  type: CLOSE_DASHBOARD,
});

export const pinDashboard = card => ({
  type: PIN_DASHBOARD,
});

export const unpinDashboard = card => ({
  type: UNPIN_DASHBOARD,
});

export const openCardModal = card => ({
  type: OPEN_CARD_MODAL,
  card
});

export const closeCardModal = card => ({
  type: CLOSE_CARD_MODAL,
  card
});

export const createCard = (card, list) => ({
  type: CREATE_CARD,
  card,
  list,
});

export const moveCard = (cardId, sourceListId, destinationListId, sourceIndex, destinationIndex) => ({
  type: MOVE_CARD,
  cardId,
  sourceListId,
  destinationListId,
  destinationIndex,
});

export const createList = list => ({
  type: CREATE_LIST,
  list
});

export const updateList = (list, data) => ({
  type: UPDATE_LIST,
  list,
  data
});
