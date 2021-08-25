import {
  GO_PREV,
  GO_NEXT,
  GET_USERS,
  GET_USERS_IT,
  GET_USERS_MARKETING,
  GET_USERS_ADMINSTRATION,
  GET_USERS_ACOUNT,
} from './actionTypes'
import { getUsersList } from '../api/gateway'

// ----GO NEXT/GO PREV ACTIONS----

export const goPrev = () => ({
  type: GO_PREV,
})

export const goNext = () => ({
  type: GO_NEXT,
})

// ----GET ACTION-----

export const getUsers = () => {
  const getUsersAction = (usersList) => ({
    type: GET_USERS,
    payload: { usersList },
  })

  return (dispatch) => {
    getUsersList().then((usersList) => {
      dispatch(getUsersAction(usersList))
    })
  }
}
// filter IT
export const getUsersFilterIT = () => {
  const getUsersFilterITAction = (usersList) => ({
    type: GET_USERS_IT,
    payload: { usersList },
  })

  return (dispatch) => {
    getUsersList().then((usersList) => {
      dispatch(
        getUsersFilterITAction(
          usersList.filter((el) => el?.employee?.department === 'ИТ'),
        ),
      )
    })
  }
}
// filter ACOUNT
export const getUsersFilterAcount = () => {
  const getUsersFilterAcountAction = (usersList) => ({
    type: GET_USERS_ACOUNT,
    payload: { usersList },
  })

  return (dispatch) => {
    getUsersList().then((usersList) => {
      dispatch(
        getUsersFilterAcountAction(
          usersList.filter((el) => el?.employee?.department === 'Бухгалтерия'),
        ),
      )
    })
  }
}

// filter MARKETING
export const getUsersFilterMarketing = () => {
  const getUsersFilterMarketingAction = (usersList) => ({
    type: GET_USERS_MARKETING,
    payload: { usersList },
  })

  return (dispatch) => {
    getUsersList().then((usersList) => {
      dispatch(
        getUsersFilterMarketingAction(
          usersList.filter((el) => el?.employee?.department === 'Маркетинг'),
        ),
      )
    })
  }
}

// filter ADMINISTRATION
export const getUsersAdminsAcount = () => {
  const getUsersFilterAdminsAction = (usersList) => ({
    type: GET_USERS_ADMINSTRATION,
    payload: { usersList },
  })

  return (dispatch) => {
    getUsersList().then((usersList) => {
      dispatch(
        getUsersFilterAdminsAction(
          usersList.filter(
            (el) => el?.employee?.department === 'Администрация',
          ),
        ),
      )
    })
  }
}
