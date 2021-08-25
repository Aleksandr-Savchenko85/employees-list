import {
  GO_PREV,
  GO_NEXT,
  GET_USERS,
  GET_USERS_IT,
  GET_USERS_MARKETING,
  GET_USERS_ADMINSTRATION,
  GET_USERS_ACOUNT,
} from './actionTypes'

const initialState = {
  users: [],
  currentPage: 0,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_PREV:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }
    case GO_NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }

    case GET_USERS:
      return {
        ...state,
        users: action.payload.usersList,
      }
    case GET_USERS_IT:
      return {
        ...state,
        users: action.payload.usersList,
      }
    case GET_USERS_MARKETING:
      return {
        ...state,
        users: action.payload.usersList,
      }
    case GET_USERS_ADMINSTRATION:
      return {
        ...state,
        users: action.payload.usersList,
      }
    case GET_USERS_ACOUNT:
      return {
        ...state,
        users: action.payload.usersList,
      }

    default:
      return state
  }
}

export default usersReducer
