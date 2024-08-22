import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  // const id = useRef(null);

  // useEffect(() => {
  //   return () => {
  //     console.log("Unmount counter");
  //     handleStop();
  //   }
  // }, [])


  // const handleStart = () => {
  //   console.log("Counter Start");
  //   id.current = setInterval(() => {
  //     setCount((inc) => inc + 1)
  //   }, 1000);
  // }

  // const handleStop = () => {
  //   console.log("Counter Stop");
  //   clearInterval(id.current);
  // }

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((preCount) => preCount + 1)
      }, 1000);
    }
    // console.log("Counter running");
    return () => clearInterval(timer);
  }, [isRunning])


  const handleStart = () => {
    console.log("Counter started");
    setIsRunning(true)
  }

  const handleStop = () => {
    console.log("Counter stopped");
    setIsRunning(false);
  }

  return (
    <>
      <div className='text-center justify-center'>
        <h1 className='text-5xl font-semibold m-12'>Counter App</h1>
        <h2 className='m-6'>Counter value :   {count} </h2>
        <button onClick={handleStart} disabled={isRunning} className='shadow-2xl rounded border-solid border-2 border-indigo-600 box-border mr-8 p-2'>Start</button>
        <button onClick={handleStop} disabled={!isRunning} className='shadow-2xl rounded border-solid border-2 border-indigo-600 box-border  p-2 '>Stop</button>

      </div>
    </>
  )
}

export default App
