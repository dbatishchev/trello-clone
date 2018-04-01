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
