import {
  STUDENTS_FAILURE,
  STUDENTS_REQUEST,
  STUDENTS_SUCCESS
} from "./actiontypes";

const initState = {
  loading: false,
  error: false,
  studentsArray: [],
  totalPages: 0
};
export const studentsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case STUDENTS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case STUDENTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case STUDENTS_SUCCESS: {
      return {
        ...state,
        error: false,
        studentsArray: payload.students,
        totalPages: payload.totalPages
      };
    }
    default: {
      return state;
    }
  }
};
