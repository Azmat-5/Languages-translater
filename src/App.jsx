import { useState } from 'react'
import Navbar from './componets/Navbar/Navbar'
import TranslatorCard from './componets/translation/TranslatorCard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    <TranslatorCard/>
   
    </>
  )
}

export default App
