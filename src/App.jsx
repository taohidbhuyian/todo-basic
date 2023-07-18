import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  
  // const [list, setList] = useState([]);
  // const [item, setItem] = useState("");

  return (
    <>
      <TodoList/>
        {/* <p>{item} </p>
        <input onChange={(e)=>setItem(e.terget.value)} />
        <button>Add</button>
        <br /> */}
    </>
  )
}

export default App
