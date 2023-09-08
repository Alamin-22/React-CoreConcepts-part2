import './App.css'

function App() { /* CHaile normal function o deua jay */
  const handleClick=()=>{
    alert("Button Clicked")
  }

  const addToFive= (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts Part-2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert("We just write a function into onClick")}}>Click Different</button>
      {/* vejal ektu ulta */}
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
