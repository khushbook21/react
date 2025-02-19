import './App.css';
// import LectureOne from './components/LectureOne';
// import LectureTwo from './components/LectureTwo';
import LectureThree from './components/LectureThree';
import LogOut from './components/LogOut';

import { useState } from 'react';
function App() {
  const [name, setName] = useState('')
  const [isLoggedIn, setLoggedIn] = useState(true);

  // return (
  //   <div className="App">

  //     {/* <LectureTwo title="card1" name={name} setName={setName} />
  //     <LectureTwo title="card2" name={name} setName={setName} />

  //     <p> I am inside parent comonent and value of name is:::? {name} </p> */}
  //     {/* <LectureOne /> */}

  //     <LectureThree />
  //   </div>
  // );

  // if else condition 

  // if (isLoggedIn) {
  //   return (
  //     <LectureThree />
  //   );
  // } else {
  //   return (
  //     <LogOut />
  //   );
  // }

  //turnary operator condition
  //   return {
  //  { isLoggedIn ? <LectureThree /> : <LogOut /> }
  // }

  function hnadleClick() {
    alert('hello user you want click me');
  }
  function handleMouseOver() {
    alert('hover on pra is happening');
  }
  function handleInputChange() {
    console.log('on input change the count');
  }

  return (

    <div>
      <form>
        <input type="text" onChange={handleInputChange} />

      </form>
      <img className="avtar" src='https://i.imgur.com/1bX5QH6.jpg' alt="this is image " width={100} height={100} style={{padding:"10px"}}/>

      {/* <p onMouseOver={handleMouseOver} style={{ color: "red", padding:"10px" }}>Im a para </p>
      <button onClick={hnadleClick}>click me</button> */}
    </div>
  )

}

export default App;



