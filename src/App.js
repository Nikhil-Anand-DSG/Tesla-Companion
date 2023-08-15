import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <p className="text">Nikhil Anand</p>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" color="red" />
        <p>
          Tesla Companion
        </p>
        <a href="https://youtube.com/redirect?q=https://www.coingecko.com/en/coins/dogecoin">
          <button className="EnterButton" >
            Doge Coin
          </button>
        </a>
        <a href="https://youtube.com/redirect?q=https://reddit.com">
          <button className="EnterButton" >
            Reddit
          </button>
        </a>
      </header>
    </div>
      </div>
  );
}

export default App;
