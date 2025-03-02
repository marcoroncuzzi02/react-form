import languages from "./languages.js"
import { useState } from "react"

function App() {

  const [name,setName] = useState('')
  const [list, setList] = useState(languages);

  const addName = e => {
    e.preventDefault();
    setList([...list, name]);
    // list.push(name);
    }

  return (
    <>
      <h1>list</h1>
      <form onSubmit={addName}>
        <input 
        type="text"
        value={name}
        onChange={e => { setName(e.target.value)}} />
        <button>invio</button>
      </form>

      <ul className=" containere d-flex flex-column">
      {list.map( (element) =>{
                return(
                  <li
                    className="list-element"
                    key={element.id}
                  >
                    {element.title}
                  </li>
                )
              }      
      )}
      </ul>
            
    </>
  )
}

export default App
