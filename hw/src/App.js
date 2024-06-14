import logo from './logo.svg';
import './App.css';
import Main from "./pages/MainPage/Main";
import About from "./pages/AboutPage/About";
import Todo from "./pages/TodoPage/Todo";

function App() {
  return (
    <div className="App">
    <Main/>
      <About/>
      <Todo/>
    </div>
  );
}

export default App;
