import { useState } from "react"

export default function Counter(){
    const [count, setCount]= useState(0)
    const handleAdd = () =>{
        const newCount = count + 1
        setCount(newCount)
    }
    const hanleReduce=()=>{
        const newCount= count - 1
        setCount(newCount)
    }
    return (
        <div style={{border: "2px solid red"}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd} style={{backgroundColor: "yellow"}}>Add</button>
            <button onClick={hanleReduce} style={{backgroundColor: "yellow"}}>Reduce</button>
        </div>
    )
}