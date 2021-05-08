import { useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';

function App() {
  const [questionNumber, setQuestionNumber] = useState (1)
  const ListPyramid = [
    {id:1, amount:"Nada mal"},
    {id:2, amount:"Bien"},
    {id:3, amount:"En racha prro"},
    {id:4, amount:"Seguis en racha wacho"},
    {id:5, amount:"5/10 mira vos"},
    {id:6, amount:"Ahora se complica prro"},
    {id:7, amount:"Vamo a jugar"},
    {id:8, amount:"Ya tu sabes"},
    {id:9, amount:"No la pechees"},
    {id:10, amount:"MVP"},
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timmer">30</div>
        </div>
        <div className="bottom">
          <Trivia/>
        </div>
      </div>
      <div className="pyramid">
        <ul className="List">
          {ListPyramid.map((m) => (
            <li className={questionNumber === m.id ? "ListItem active" : "ListItem"} >
              <span className="ListItemNumber">{m.id}</span>
              <span className="ListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
