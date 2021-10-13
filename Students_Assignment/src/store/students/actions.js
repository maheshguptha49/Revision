import axios from "axios";
import { baseUrl } from "../../utills/link";
import {
  STUDENTS_FAILURE,
  STUDENTS_SUCCESS,
  STUDENTS_REQUEST
} from "./actiontypes";

const studentsRequest = () => {
  return { type: STUDENTS_REQUEST };
};

const studentsSuccess = (payload) => {
  return { type: STUDENTS_SUCCESS, payload };
};

const studentsFailure = () => {
  return { type: STUDENTS_FAILURE };
};

const studentsGet = (querylink) => {
  return async (dispatch) => {
    try {
      dispatch(studentsRequest());
      const { data } = await axios.get(querylink);
      dispatch(studentsSuccess(data));
    } catch (error) {
      dispatch(studentsFailure());
    }
  };
};

const studentsPost = (payload, querylink) => {
  return async (dispatch) => {
    try {
      dispatch(studentsRequest());
      await axios.post(`${baseUrl}/students`, payload);
      dispatch(studentsGet(querylink));
    } catch (error) {
      dispatch(studentsFailure());
    }
  };
};

const studentsPatch = (_id, payload, querylink) => {
  return async (dispatch) => {
    try {
      dispatch(studentsRequest());
      await axios.patch(`${baseUrl}/students/${_id}`, payload);
      dispatch(studentsGet(querylink));
    } catch (error) {
      console.log(error);
      dispatch(studentsFailure());
    }
  };
};

const studentsDelete = (_id, querylink) => {
  return async (dispatch) => {
    try {
      dispatch(studentsRequest());
      console.log("delete");
      await axios.delete(`${baseUrl}/students/${_id}`);
      dispatch(studentsGet(querylink));
    } catch (error) {
      console.log(error, "erroe");
      dispatch(studentsFailure());
    }
  };
};

export {
  studentsDelete,
  studentsFailure,
  studentsGet,
  studentsPatch,
  studentsPost,
  studentsRequest,
  studentsSuccess
};
