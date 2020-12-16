import logo from "../assets/icon/logo.svg";
import "./App.css";
import NavBar from "../components/navBar/index";
import Footer from "../components/Footer/index";

function App() {
  return (
    <div className="App">
      <NavBar className="title" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer className="footer" />
    </div>
  );
}

export default App;
