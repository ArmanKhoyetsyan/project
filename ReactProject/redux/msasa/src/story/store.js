import { createStore } from "redux";

const story  = createStore(
  (state, action) => {
    if (action.type === "poxi anun@") {
      return {
        ...state,
        countUser:{
            name: action.payload.name
        }
      };
    }

    return state;
  },
  {
    countUser: {
      name: "klor",
    },
  }
);

export default story