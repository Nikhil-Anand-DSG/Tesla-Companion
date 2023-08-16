import logo from "./logo.svg";
import reddit from "./Assets/reddit.png";
import maps from "./Assets/maps.png";
import cat from "./Assets/cat.png";
import charge from "./Assets/charge.png";
import "./App.css";

function App() {
  return (
      <div>
        <p className="text">Nikhil Anand</p>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" color="red" />
            <p>Tesla Companion</p>
            <div className="links">
              <a href="https://youtube.com/redirect?q=https://www.reddit.com/r/teslamotors/">
                <img src={reddit} className="link-button" alt="reddit" />
              </a>
              <a href="https://youtube.com/redirect?q=https://www.google.com/maps">
                <img
                    src={maps}
                    className="link-button"
                    alt="maps"
                    style={{ height: 100, width: 120 }}
                />
              </a>
                <a href="https://youtube.com/redirect?q=https://hostrider.com/">
                    <img
                        src={cat}
                        className="link-button"
                        alt="cat"
                    />
                </a>
                <a href="https://youtube.com/redirect?q=https://www.plugshare.com/">
                    <img
                        src={charge}
                        className="link-button"
                        alt="charge"
                    />
                </a>
            </div>
          </header>
        </div>
      </div>
  );
}

export default App;
