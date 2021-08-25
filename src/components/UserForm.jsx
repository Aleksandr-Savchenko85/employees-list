import React from 'react'
import { useDispatch } from 'react-redux'
import {
  getUsersFilterIT,
  getUsersFilterAcount,
  getUsersFilterMarketing,
  getUsersAdminsAcount,
  getUsers,
} from '../redux/users.actions'

const UserForm = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getUsers())
  }
  const handleClickIT = () => {
    dispatch(getUsersFilterIT())
  }
  const handleClickAcount = () => {
    dispatch(getUsersFilterAcount())
  }
  const handleClickMarketing = () => {
    dispatch(getUsersFilterMarketing())
  }
  const handleClickAdministration = () => {
    dispatch(getUsersAdminsAcount())
  }
  return (
    <div className="login-form">
      <h1 className="text-title">Департамент</h1>
      <button className="submit-button" onClick={handleClick}>
        Все департаменты
      </button>
      <button className="submit-button" onClick={handleClickAdministration}>
        Администрация
      </button>
      <button className="submit-button" onClick={handleClickIT}>
        ИТ
      </button>
      <button className="submit-button" onClick={handleClickAcount}>
        Бухгалтерия
      </button>
      <button className="submit-button" onClick={handleClickMarketing}>
        Маркетинг
      </button>
    </div>
  )
}

export default UserForm
