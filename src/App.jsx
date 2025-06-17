import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');
 
  const changeName = (e) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario es decir, previene el comportamiento por defecto de React en formularios.
    if(newName.trim() !== '') {
      setName(newName);
      setNewName('');
    }
  };

// --- NOTA --- Hay que llamar a e.preventDefault() dentro de changeName, porque React en formularios recarga la página por defecto.

  return (
    <div class="listNames">
      <h2>Teacher Name: {name}</h2>
      <ul>
        <li onClick={() => setName('Data')}>Data</li>
        <br></br>
        <li onClick={() => setName('Reyes')}>Reyes</li>
        <br></br>
        <li onClick={() => setName('Yolanda')}>Yolanda</li>
      </ul>
      <div class="changeNameform">
        <form onSubmit={changeName}>
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="add a name"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default App