import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment= ()=>{
      if(count < 20){
        setCount(count+1)
      }
    }
    const decrement= ()=>{
      if(count > 0 ){
        setCount(count-1)
      }
    }
  return (
    <>
      <h1>Counter Value</h1>
      <h2>Counter : {count}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default Counter