import logo from "./logo.svg";
import "./App.css";
import MyJSX from "./components/jsx/MyJSX";
import MyClass from "./components/classcomponents/MyClass";
import MyState from "./components/state/MyState";

function App() {
  return (
    <div className="App">
      <MyJSX />
      <MyClass />
      <MyState />
    </div>
  );
}

export default App;
