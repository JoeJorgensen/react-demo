import {useState} from 'react'
const DemoContainer = (props)=>{
    const [showContent, setShowContent] = useState(true)
    return(
        <div className='demo-container'>
            <h1>{props.header}</h1>
            {showContent && props.children}
            <button onClick={()=> setShowContent(!showContent)}>
            {showContent ? 'hide' : 'show'}
                </button>
        </div>
    )
}


export default DemoContainer