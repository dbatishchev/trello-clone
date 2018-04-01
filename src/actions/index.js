export const openDashboard = card => ({
  type: 'OPEN_DASHBOARD',
});

export const closeDashboard = card => ({
  type: 'CLOSE_DASHBOARD',
});

export const pinDashboard = card => ({
  type: 'PIN_DASHBOARD',
});

export const unpinDashboard = card => ({
  type: 'UNPIN_DASHBOARD',
});

export const openCardModal = card => ({
  type: 'OPEN_CARD_MODAL',
  card
});

export const closeCardModal = card => ({
  type: 'CLOSE_CARD_MODAL',
  card
});

export const moveCard = card => ({
  type: 'MOVE_CARD',
  card
});

export const createList = column => ({
  type: 'CREATE_LIST',
  column
});
