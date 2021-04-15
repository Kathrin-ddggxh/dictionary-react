import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by Kathrin Welfare. View{" "}
          <a
            href="https://github.com/Kathrin-ddggxh/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
