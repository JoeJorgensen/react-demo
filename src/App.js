import logo from './logo.svg';
import './App.css';
import FlashCard from './FlashCard';
import DemoContainer from './DemoContainer';
// absolute path from /Users/joejorgensen/Desktop/DPL_DEMO/week1/react-demo/src/...
// relative is from where you currently at


// import Counter, {x,y} from './Counter'
import Keyboard, {x} from './Keyboard';
import { getAlphabet } from './helpers';

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
     <DemoContainer header = 'FlashCard'>
     <FlashCard/>
     </DemoContainer>
      {/* <p onClick={handleClickYo}>click me</p> */}
      <DemoContainer header = 'Keyboard'>
      <Keyboard x={'Message'} title={'KEYBOARD'} />
      </DemoContainer>
      <DemoContainer header = 'To Do:'>
        <p>TO DO</p>
      </DemoContainer>
    </div>
  );
}

export default App;

//Main concepts
// JSX
// Components (functional)
// State
// Props