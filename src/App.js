import './App.css';
// import LectureOne from './components/LectureOne';
import LectureTwo from './components/LectureTwo';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">

      <LectureTwo title="card1" name={name} setName={setName} />
      <LectureTwo title="card2" name={name} setName={setName} />

      <p> I am inside parent comonent and value of name is:::? {name} </p>
      {/* <LectureOne /> */}
    </div>
  );
}

export default App;



