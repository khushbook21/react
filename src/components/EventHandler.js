import React from 'react'

const EventHandler = () => {
  function clickEvent() {
    alert('hello react');
  }
  return (
    <div onClick={clickEvent} style={{ cursor: 'pointer', border: '1px solid red', padding: '10px' }}>Please Click Me </div>
  )
}

export default EventHandler