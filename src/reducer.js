export const initialState = {
  query: 'popular',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_QUERY':
      return {
        ...state,
        query: action.item,
      };
    default:
      return state;
  }
};
export default reducer;
