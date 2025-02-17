import React from 'react'

const LectureTwo = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) => props.setName(e.target.value)} />
      <p>Nmae state variable ki value inside card:::? {props.title} {props.name}</p>
    </div>
  )
}

export default LectureTwo