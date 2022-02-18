import React, {useState} from 'react'

// props : {title:string}
const Counter = (props) => {
    // const [state, setState] = useState(initialState)
    const [count, setCount] = useState(props.x)
    const add = ()=>{
      console.log('add clicked')
      setCount(count + 1)
    
    }
    const minus = ()=>{
        console.log('minus clicked')
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{props.x}) {props.title}</h1>
            <p>Count: {count}</p>
            <button onClick={add}>add</button>
            <button onClick={minus}>minus</button>
            <button onClick={()=> setCount(0)}>reset</button>
        </div>
    )
    }
// in js you can have 1 default export
export default Counter

// you can have many export
export const x = 'whatever'
export const y = ()=>{console.log('y func')}