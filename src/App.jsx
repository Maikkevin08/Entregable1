import { useState } from 'react'
import './App.css'
import QuoteBox from './components/quoteBox'
//creamos un arreglo para imagens
const bgs=["bg1","bg2","bg3","bg4"]
const planet=["pla1","pla2","pla3","pla4"]


import quotes from "./db/quotes.json"
import { getRandomElement } from './utils/random'

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes))
  //creamos un estado, con fondo aleatorio 
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs))

  const [currentPla, setCurrentPla] = useState(getRandomElement(planet))

  

  //esta funcion nos va permitir cmabiar el estado aleatorio
  const handleChangeQuote=()=>{
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(bgs))
    setCurrentPla(getRandomElement(planet))
    
  }

return (
    <main className= {` App ${currentBg} ${currentPla} `} >
     <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} />
     

    </main>
  )
}

export default App
