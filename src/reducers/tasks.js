const todos = (state = [], action) => {
  switch (action.type) {
    case 'MOVE_CARD':

      console.log(action.card);

      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state
  }
};

export default todos