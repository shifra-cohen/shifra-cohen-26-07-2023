import { NAVBAR_OPTIONS, PageAction, PageState } from "../types";

const initialState: PageState = { page: NAVBAR_OPTIONS.HOME };

const pageReducer = (state = initialState, action: PageAction): PageState => {
  switch (action.type) {
    case NAVBAR_OPTIONS:
      return {
        page: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
