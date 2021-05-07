import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main">Menu</div>
      <div className="pyramid">
        <ul className="List">
          <li className="ListItem active">
            <span className="ListItemNumber">4</span>
            <span className="ListItemAmount">Seguis en racha wacho</span>
          </li>
          <li className="ListItem">
            <span className="ListItemNumber">3</span>
            <span className="ListItemAmount">En racha prro</span>
          </li>
          <li className="ListItem">
            <span className="ListItemNumber">2</span>
            <span className="ListItemAmount">Bien</span>
          </li>
          <li className="ListItem">
            <span className="ListItemNumber">1</span>
            <span className="ListItemAmount">Nada mal</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
