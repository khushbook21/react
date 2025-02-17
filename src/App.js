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
  if (isLoggedIn) {
    return (
      <LectureThree />
    );
  } else {
    return (
      <LogOut />
    );
  }


  //turnary operator condition
  //   return {
  //  { isLoggedIn ? <LectureThree /> : <LogOut /> }
  // }



}

export default App;



