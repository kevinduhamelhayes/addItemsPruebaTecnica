import { useState } from 'react'
import './App.css'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
  timestamp: number
  text: string
}
const INITIAL_ITEMS= [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'elemento 1',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'elemento 2',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'elemento 3',
  },

]
function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)
  const [inputValue, setInputValue] = useState('');  // Nuevo estado para el input

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: inputValue,
    }
    setItems((prevItems) => [...prevItems, newItem]);
    setInputValue('');  // Limpiar el input usando el estado
  }

  return (

    <main>
    <aside>
      <h1>prueba tecnica react</h1>
      <h2>añadir y eliminar elementos a una lista</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            required
            placeholder='videojuegos'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}  // Controlar el input
          />
        </label>
        <button type="submit">añadir elementos a la lista</button>
      </form>
    </aside>
    <section>
      <h2>lista de elementos</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => {
              setItems((prevItems) => prevItems.filter(currentItem => currentItem.id !== item.id))
            }}>eliminar</button>
          </li>
        ))}  
      </ul>
    </section>
  </main>
  )
}

export default App
