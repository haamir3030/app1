import './App.css';
import {TbArrowBarDown} from 'react-icons/tb'
import Listitem from './components/Listitem';
import { useEffect, useState } from 'react';

function App() {

const [todo,setTodo] = useState("")
const [alltodos,setAllTodos] = useState([])


const addTodo = (e) =>{

  e.preventDefault();

  const todoitem ={
    id: new Date().getTime(),
    text: todo,
    isChecked: false
  }

  if(todo !== ""){
    setAllTodos([...alltodos].concat(todoitem).reverse())
    setTodo('')
  }
}

const deleteTo = (id)=>{
  const filteredTodo = alltodos.filter(todo => todo.id !== id)
  setAllTodos(filteredTodo)
}

const toggleChecked =(id)=>{
  let updatedTodos = [...alltodos].map(todo =>{
    if(todo.id === id){
      todo.isChecked = !todo.isChecked
    }
    return todo
  })
  setAllTodos(updatedTodos)
}

const getAllTodos =()=>{
  let stored = JSON.parse(localStorage.getItem('todo'))

  if(stored){
    setAllTodos(stored)
  }
}

useEffect( ()=>{
  getAllTodos()
},[])

useEffect(()=>{
  localStorage.setItem('todo',JSON.stringify(alltodos))
},[alltodos])



  return (
    <div className='App'>
      <div className="App_todo">
        <form className="App_input_wrapper" onSubmit={addTodo}>
          <input type="text" name="" className='App_input' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <div className="App_input_button" onClick={addTodo}>
            <TbArrowBarDown size={24}/>
          </div>
        </form>

        <div className="App_todo_list">

          {
            alltodos.map((todo)=>(
              <Listitem key={todo.id} text={todo.text} isChecked={todo.isChecked}
               toggleChecked = {()=>toggleChecked(todo.id)} 
               deleteTo = {()=> deleteTo(todo.id)}/>

            ))
          }

          {
            alltodos.length === 0 && (
              <p className='empty'> there are no todos</p>
            )
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
