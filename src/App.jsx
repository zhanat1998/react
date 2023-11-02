
import "./App.css"
import List from "./components/List/List";
import AddTask from "./components/AddTask/AddTask";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  // console.log(count)
  // const count = 1;
  const str = 'str';
  const arr = ['item2', 'item3', 'item4', 5]

  const handleCount = () => {
    setCount(2);
  }
  return (

    <>
      <input />
      <h1>Todo list</h1>
      <button onClick={handleCount}>CLICK</button>
      <AddTask />
      <List count={count}
        str={str}
        arr={arr} />
    </>
  )
}

export default App;
