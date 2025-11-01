import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  function handleChange(event){
    setInputText(event.target.value)
  }

  function addTodo(){
    setTodos((prevTodos) => {
      return([...prevTodos, inputText])
    })
    setInputText("")
  }

  function deleteTodo(id){
    setTodos((prevTodos) => {
      return(
        prevTodos.filter((todo, index) => {
          return(id !== index)
        })
      )
    })
  }


  return (
    <>
      <div className='container'>
        <div className='heading'>
          <h1>To-Do App</h1>
        </div>
        <div className='form'>
          <input type='text' onChange={handleChange} value={inputText}/>
          <button onClick={addTodo}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
              {todos.map((todo, index) => {
                return(
                  <div key={index} onClick={() => {deleteTodo(index)}}>
                    <li>{todo}</li>
                  </div>
                )
              })}
          </ul>
        </div>
      </div>

      <footer className='footer'>
        <p>© {new Date().getFullYear()} To-Do App | Developed by Mahesh Sale</p>
      </footer>
    </>
  );
}

export default App;
