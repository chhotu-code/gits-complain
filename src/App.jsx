import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MainSection from './components/MainSection'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/abstract-futuristic-technology-cyber-space-blue-wave-background-3d-rendering_75775-874.jpg?w=826)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh'}}>
    <br /><br /><br /><br /><br /><br />
     <MainSection/>

    </div>
    </>
  )
}

export default App
