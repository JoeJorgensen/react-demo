import {React} from "react";
import { useState } from "react";


const Counter = (props)=>{
    const [Count, setCount] = useState(props.Count)

const setTo0 = ()=>{
setCount(0)
return setTo0
}

const add = ()=>{
setCount(Count + 1)
return add
}
const subtract = ()=>{
setCount(Count - 1)
return subtract
}

return (
    <div>
        <h1>Counter</h1>
        <p>Count:{Count}</p>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={setTo0}>Reset</button>
    </div>
)
}



export default Counter