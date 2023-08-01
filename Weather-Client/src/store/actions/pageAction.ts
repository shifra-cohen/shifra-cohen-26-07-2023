import { NAVBAR_OPTIONS, PageAction } from "../types";

export const setPage = (page: NAVBAR_OPTIONS): PageAction => {
  return {
    type: NAVBAR_OPTIONS,
    payload: page,
  };
};
