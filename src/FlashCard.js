import {useState} from 'react'
const FlashCard = (props)=>{
    const [showQuestion, setShowQuestion]= useState(true)
const renderCard = ()=>{
if(showQuestion){
    return <p>{props.question}</p>
} else { 
return <p>{props.answer}</p>
}
}
    return(
        <div>
            {renderCard()}
            <button onClick={()=>setShowQuestion(!showQuestion)}>Answer</button>
            
            
        </div>
    )
}

export default  FlashCard