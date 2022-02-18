import React, {useState} from 'react'

// props : {title:string}
const Keyboard = (props) => {
    // const [state, setState] = useState(initialState)
    
    const [count, setCount] = useState(props.x)
    const add = ()=>{
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const findLetter = (input) => {
        
        for(let i=0; i< letters.length-1; i++)
        {
            
            if(input.target.id === letters[i])
             setCount (count + letters[i])
            console.log(input.target.id)
            } 
            
        } 
         console.log(findLetter())
        // console.log(findLetter(input))
     }
    //  let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return ( 
        <div>
        

            <h1> {props.x}{props.title})</h1>
            <p>{count}</p>
            <button onClick={add}targetid='A'>A</button> 
            <button onClick={add}>B</button>
            <button onClick={add}>C</button>
            <button onClick={add}>D</button>
            <button onClick={add}>E</button>
            <button onClick={add}>F</button>
            <button onClick={add}>G</button>
            <button onClick={add}>H</button>
            <button onClick={add}>I</button>
            <button onClick={add}>J</button>
            <button onClick={add}>K</button>
            <button onClick={add}>L</button>
            <button onClick={add}>M</button>
            <button onClick={add}>N</button>
            <button onClick={add}>O</button>
            <button onClick={add}>P</button>
            <button onClick={add}>Q</button>
            <button onClick={add}>R</button>
            <button onClick={add}>S</button>
            <button onClick={add}>T</button>
            <button onClick={add}>U</button>
            <button onClick={add}>V</button>
            <button onClick={add}>W</button>
            <button onClick={add}>X</button>
            <button onClick={add}>Y</button>
            <button onClick={add}>Z</button>
            <button onClick={()=> setCount('')}>reset</button>
           
           
        
        </div>
        
        
         
    )
    
    }
// in js you can have 1 default export
export default Keyboard

// you can have many export
export const x = ''
// export const y = ()=>{console.log('y func')}
// export let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
