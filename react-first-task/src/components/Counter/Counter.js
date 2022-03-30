import React from 'react'
import './Counter.css'
import {Button} from 'reactstrap';

export default function Counter() {
    const [count, setCount]=React.useState(0)

    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount(count-1)
    }
  return (
    <div className='counter'>
        <Button
        onClick={decrease}
        color="danger"
        size='lg'
        >
        -
        </Button>
        {count}
        <Button
        onClick={increase}
        color="light"
        size='lg'
        >
        +
        </Button>
    </div>
  )
}

