
import './App.css'
import Navbar from './Navbar'
import { useState , useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';



function App() {
 
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
   
    let test = localStorage.getItem("todos")
    if(test){

      let t = JSON.parse(localStorage.getItem("todos"))
      setTodos(t)
    }
  
   
  }, [])
  

  const save = (e) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  

  const add = ()=>{
   setTodos([...todos , {id:uuidv4(),todo ,isComleted:false}])
   setTodo("")
   save()
  }
  const change = (e)=>{
   setTodo(e.target.value)
   
  }
  const Edit = (e,id)=>{
    
    let t = todos.filter(item=>item.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
    save()
    
  }
  const Delete = (e,id)=>{
   
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
    save()
  }
  const handleChekBox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isComleted = !newTodos[index].isComleted;
    setTodos(newTodos)
    save()
  }

  return (
    <>
    <Navbar/>
    <div className="container my-6">
      <div className='box rounded-xl w-[50vw] mx-auto   '>
          <div className="input rounded-lg bg-blue-100 p-8 ">
            <h2 className='text-black my-1 font-bold'>Add Todo</h2>
            <input onChange={change} value={todo} type="text" className='w-1/2 border-2 rounded-md border-blue-950' />
            <button onClick={add} className='text-white font-bold bg-blue-600 hover:bg-blue-950 py-1 px-3 mx-4 rounded-md text-sm '>Save</button>
          </div>
          <div className="list min-h-[40vh] my-4 p-8 rounded-xl bg-blue-100">
            {todos.length === 0 && <div className='m-5'>No Saved TO-DO</div>}
            {todos.map((item)=>{

           
            return(<div key={item.id} className="todo border-2 p-4 my-3 border-blue-950 rounded-xl flex justify-between ">
              <input name={item.id} onChange={handleChekBox} type="checkbox" value={item.isComleted}  />
                <div className={item.isComleted?"line-through":""}>{item.todo}</div>
                <div className="btn">
                <button onClick={(e)=>{Edit(e,item.id)}} className='text-white font-bold bg-blue-600 hover:bg-blue-950 py-1 px-3 mx-3 rounded-md text-sm'>Edit</button>
                <button onClick={(e)=>{Delete(e,item.id)}} className='text-white font-bold bg-blue-600 hover:bg-blue-950 py-1 px-3 mx-3 rounded-md text-sm'>Delete</button>
                </div>
            </div>)
            })}
          </div>
      </div>
      </div>  
    </>
  )
}

export default App
