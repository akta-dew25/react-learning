import logo from "./logo.svg";
import "./App.css";
import MyJSX from "./components/jsx/MyJSX";
import MyClass from "./components/classcomponents/MyClass";
import MyState from "./components/state/MyState";
import ClickCount from "./components/state/ClickCount";
import IncrementDecrement from "./components/state/IncrementDecrement";
import Effects from "./components/state/Effects";
import HTMLPDF from "./components/HTMLPDF";
import StateRevision from "./components/state/StateRevision";
import Parent from "./components/props/Parent";
function App() {
  return (
    <div className="App">
      {/* <MyJSX />
      <MyClass />
      <MyState />
      <Effects />
      <ClickCount />
      <IncrementDecrement />
      <HTMLPDF /> 
    <StateRevision />*/}
      <Parent />
    </div>
  );
}

export default App;
