import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia';

function App() {
  const [questionNumber, setQuestionNumber] = useState (1);
  const [timeOut, setTimeOut] = useState (false);
  const [earned, setEarned] = useState ("Novato");

  const data = [
    {
      id: 1,
      question: " ¿ Quien realizo el gol de la victoria, en la final del mundial 2010 ? ",
      answers: [
        {
          text: "Cesc Fabregas",
          correct: false,
        },
        {
          text: "Andrés Iniesta",
          correct: true,
        },
        {
          text: "Carles Puyol",
          correct: false,
        },
        {
          text: "Arjen Robben",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: " ¿ En que año se jugo una final de Champions League entre equipos Alemanes ? ",
      answers: [
        {
          text: "2011/2012",
          correct: false,
        },
        {
          text: "2009/2010",
          correct: false,
        },
        {
          text: "2012/2013",
          correct: true,
        },
        {
          text: "2001/2002",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: " Antes de estar en el Futból Europeo ¿ En que club jugo Neymar Jr. ? ",
      answers: [
        {
          text: "Santos",
          correct: true,
        },
        {
          text: "Grêmio",
          correct: false,
        },
        {
          text: "São Paulo",
          correct: false,
        },
        {
          text: "Palmeiras",
          correct: false,
        },
      ],
    },
  ]

  const ListPyramid = useMemo(() => 
    [
      {id:1, amount:"10 - Nada mal"},
      {id:2, amount:"9 - Bien"},
      {id:3, amount:"8 - En racha prro"},
      {id:4, amount:"7 - Seguis en racha wacho"},
      {id:5, amount:"6 - 5/10 mira vos"},
      {id:6, amount:"5 - Ahora se complica prro"},
      {id:7, amount:"4 - Vamo a jugar"},
      {id:8, amount:"3 - Ya tu sabes"},
      {id:9, amount:"2 - No la pechees"},
      {id:10, amount:"1 - MVP"},
    ].reverse(),
   []
  );

  useEffect(() => {
    questionNumber > 1 && 
      setEarned(ListPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [ListPyramid, questionNumber]);
  return (
    <div className="app">
      <div className="main">
        {timeOut ? (
          <h1 className="endText">Fallastes,<br/>llegastes hasta la <br/>posicion: {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timmer">
                <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia 
                data={data} 
                setTimeOut={setTimeOut} 
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber} 
              />
            </div>
          </>
        )}
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
