import React from 'react'

const User = (props) => {
  const statusWork = props?.status

  return (
    <>
      <div className="block1">
        <img
          className="foto-employee"
          src="https://simpledoc.ru/resume/examples/direktor/res/i/photo.jpg"
          alt=""
        />
        <div className="info">
          <span className="full-name">{props?.employee?.fullName}</span>
          <span className="job-title">{props?.employee?.jobTitle}</span>
          <span className="department-text">
            Пiдроздiл: <a href="stylecheet">{props?.employee?.department}</a>
          </span>
          <span className="phone-text">Телефон: {props?.employee?.phone}</span>
          <br></br>
          <span className="email-text">Email: {props?.employee?.email}</span>
        </div>
        <div className="block-st">
          {statusWork === 'Уволен' ? (
            <span className="text-fired">Fired</span>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default User
