import axios from "axios";
import {
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  GET_EVENT_FAIL,
  GET_EVENT_SUCCESS,
} from "./types";

export const createEvent = ({ userId, eventsList }) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      params: { userId: userId },
    };
    console.log(eventsList);
    const body = {
      events: eventsList,
    };
    const res = await axios.post("/api/events", body, config);
    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAIL,
    });
  }
};

export const getEvent = (userId) => async (dispatch) => {
  try {
    const res = await axios.get("/api/events", {
      headers: {
        "content-type": "application/json",
      },
      params: { userId: userId },
    });
    dispatch({
      type: GET_EVENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_EVENT_FAIL,
    });
  }
};
