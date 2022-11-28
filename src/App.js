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
import AddEmployee from "./components/props/propsrevision/AddEmployee";
import AddStudent from "./components/props/proprevision2/AddStudent";
import Cars from "./components/props/propsrevision3/Cars";
import ClickButton from "./components/state/ClickButton";
import Conditional from "./components/other/Conditional";
import Operator from "./components/other/Operator";
import Get from "./components/API/Get";
import Post from "./components/API/Post";
import UserList from "./components/API/UserList";
import MyModal from "./components/API/MyModal";

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
    <StateRevision />
    <Parent />
    <AddStudent />
   
    <Cars />
    <ClickButton />
    <Conditional />
    <Operator />
    <AddEmployee />
    
      <Get />
      <Post />
      <UserList />
  */}
      <MyModal />
    </div>
  );
}

export default App;
