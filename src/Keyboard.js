import {useState} from 'react'
import {getAlphabet} from './helpers'
// props : {title:string}
const Keyboard = () => {
    // const [state, setState] = useState(initialState)
    
    const [count, setCount] = useState('')
    const add = (char)=>{
    // let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    // const findLetter = (input) => {
        
    //     for(let i=0; i< letters.length-1; i++)
    //     {
            
    //         if(input === letters[i])
    //          setCount (count + letters[i])
    //         console.log(input)
    //         } 
           
            console.log(`${char} clicked`)
            setCount(count + char)
        //  console.log(findLetter('A'))
        

        // console.log(findLetter(input))
     }
     
     const renderAlphabet =()=>{
    //      let alp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
     let alp = getAlphabet()
    let jsx = alp.map(char=>{
        return <button key={char}onClick={()=>add(char)}>{char}</button>
    })
       return jsx
     
    
    

    }


    //  let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return ( 
        <div>

            {/* <h1> {props.x}{props.title}</h1> */}
            {/* <h1>KEYBOARD</h1> */}
            <p>Type:{count}</p>
            <button onClick={()=> add('A')}>A</button> 
            <button onClick={()=> add('B')}>B</button> 
            <button onClick={()=> add('C')}>C</button> 
            <button onClick={()=> add('D')}>D</button> 
            <button onClick={()=> add('E')}>E</button> 
            <button onClick={()=> add('F')}>F</button> 
            <button onClick={()=> add('G')}>G</button> 
            <button onClick={()=> add('H')}>H</button> 
            <button onClick={()=> add('I')}>I</button> 
            <button onClick={()=> add('J')}>J</button> 
            <button onClick={()=> add('K')}>K</button> 
            <button onClick={()=> add('L')}>L</button> 
            <button onClick={()=> add('M')}>M</button> 
            <button onClick={()=> add('N')}>N</button> 
            <button onClick={()=> add('O')}>O</button> 
            <button onClick={()=> add('P')}>P</button> 
            <button onClick={()=> add('Q')}>Q</button> 
            <button onClick={()=> add('R')}>R</button> 
            <button onClick={()=> add('S')}>S</button> 
            <button onClick={()=> add('T')}>T</button> 
            <button onClick={()=> add('U')}>U</button> 
            <button onClick={()=> add('V')}>V</button> 
            <button onClick={()=> add('W')}>W</button> 
            <button onClick={()=> add('X')}>X</button> 
            <button onClick={()=> add('Y')}>Y</button> 
            <button onClick={()=> add('Z')}>Z</button> 
            <button onClick={()=> add(' ')}>SPACE</button> 

             <button onClick={()=> setCount('')}>reset</button>
            {
                // [<p key='1'></p>,<p key='2'>B</p>,<p key='3'>C</p>]
            }
        </div>
    )
    
    }

// in js you can have 1 default export

export default Keyboard
// you can have many export
export const x = ''
