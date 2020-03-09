const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      return action.payload;
    case "LOGIN":
      return action.payload;

    default:
      return state;
  }
}
