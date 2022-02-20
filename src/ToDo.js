import { useState } from "react"


const ToDo = (props) => {
const [showToDo, setShowToDo]=useState(true)
// const renderToDo = () => {
//     if(showToDo){
//         return <p>{props.hideToDo}</p>
//     } else {
//         return <p>{props.showToDo}</p>
//     }
// }
    
    return (
        <div> 
            
        {showToDo && props.showToDo}
            <button onClick={()=>setShowToDo(!showToDo)}>
              {showToDo ?  'Hide to do list': 'Show to do list'}
            </button>
            {/* {renderToDo()} */}
            {/* <h1>To do:</h1> */}
            <h1> </h1>
        </div>
    )
}

export default ToDo