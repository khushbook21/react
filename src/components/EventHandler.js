import React from 'react'

const EventHandler = () => {
  function clickEvent() {
    alert('hello react');
  }
  return (
    <div>
      <div onClick={clickEvent} style={{ cursor: 'pointer', border: '1px solid red', padding: '10px' }}>Please Click Me </div>

      <button style={
        { padding: '10px', marginTop: '20px' }
      } onClick={function handleClick() {
        alert('You clicked me!');
      }}> Click me to see popup</button>

    </div>
  )

}

export default EventHandler