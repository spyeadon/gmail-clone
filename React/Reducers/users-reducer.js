const initialState = { currentUser: {id: 1} };

export default function usersReducer (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    default:
      return state;

  }

}
