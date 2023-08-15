import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tesla Companion
        </p>
        <a href="https://youtube.com">
          <button className="EnterButton" >
            Youtube
          </button>
        </a>
        <a href="https://reddit.com">
          <button className="EnterButton" >
            Reddit
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
