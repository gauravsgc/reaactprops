// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Middle from './Components/Middle'
import data from './Components/Data.json'
import Footer from './Components/Footer'
function App() {
  // console.log(data);
  

  return (
    <>
    <div className='main'>
      <div className='header'>
      <Header/>

      </div>
      <div className='middle'>
        <div className="container">

          {data.map((e)=><div key={e.info}>

          {/* {e.info}
         <img src= {e.icon} alt="" height={100} width={100} /> */}
         <Middle data={e.info} icon={e.icon}>{e.pay}</Middle>
          </div>)}
        {/* <Middle data="A" icon='./img.jpg'/>
        <Middle  data="B"  icon='./img4.jpg'/>
        <Middle  data="C"  icon='./img2.jpg'/>
        <Middle  data="D"  icon='./img3.jpg'/> */}
        

        </div>
      </div>
      <div className='footer'>
      <Footer/>
      </div>

    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
