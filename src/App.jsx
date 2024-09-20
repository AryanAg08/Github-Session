import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Createform from './Createform'
import Jdata from './Jdata'
import JSCOP from './JSCOP'

function App() {
  return (
    <>
    <Createform />
    {Jdata.map((data)=>{
      return(
        <JSCOP key={data.key} name={data.name} src={data.soruce} info={data.info}  />
      )
    })}
    </>
  )
}

export default App
