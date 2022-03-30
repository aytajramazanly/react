import React from 'react';
import './App.css';
import {Button} from 'reactstrap';
import User from './components/User/User'
import Counter from'./components/Counter/Counter'

function App() {
  const [comp,setComp]=React.useState(<User/>)
  const [bool,setBool]=React.useState(false)
  const handleClick=()=>{
    setComp(bool===false ? <Counter/>  : <User/>)
    setBool(!bool)
  }
  return (
    <div className="App">
          {comp}
        <Button onClick={handleClick} color="warning" size="lg">Change Component </Button>
    </div>
  );
}

export default App;
