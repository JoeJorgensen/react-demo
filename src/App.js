import logo from './logo.svg';
import './App.css';

// absolute path from /Users/joejorgensen/Desktop/DPL_DEMO/week1/react-demo/src/...
// relative is from where you currently at


// import Counter, {x,y} from './Counter'
import Keyboard, {x} from './Keyboard';

// import Counter1 from './yo/x/Counter1'

function App() {
  // JSX write 'html' in js
  // JSX is React thing
  // const handleClickYo = ()=>{
  //   y()
  //   console.log('clicked')
  // }
  return (
    <div className="App">
     <h1>{x}</h1> 
      {/* <p onClick={handleClickYo}>click me</p> */}
      <Keyboard x={''} title={'(KEYBOARD'} />
      
    </div>
  );
}

export default App;

//Main concepts
// JSX
// Components (functional)
// State
// Props