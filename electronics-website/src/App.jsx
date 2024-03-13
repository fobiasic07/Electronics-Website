import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx';
import BodyContent from './Components/BodyContent.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div class="whole-body">
      <Header />
      <BodyContent />
    </div>
  )
}

export default App
