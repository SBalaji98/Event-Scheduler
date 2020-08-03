import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  GET_EVENT_SUCCESS,
} from "../actions/types";

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EVENT_FAIL:
    case GET_EVENT_FAIL:
      return state;

    case GET_EVENT_SUCCESS:
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: payload.events,
      };

    default:
      return state;
  }
}
