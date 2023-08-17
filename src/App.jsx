import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NabVar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <NabVar />
       <ItemListContainer greeting ={'Enjoi Vaping'} />
      </div>

  )
}

export default App
