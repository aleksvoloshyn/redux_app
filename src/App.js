import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, add, remove } from './redux/store'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.myValue)
  const items = useSelector((state) => state.items)

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(decrement(100))
        }}
      >
        Decrement
      </button>
      {value}
      <button
        onClick={() => {
          dispatch(increment(50))
        }}
      >
        Increment
      </button>
      <ul>
        {items.map((item, ind) => {
          return <li key={ind}>{item}</li>
        })}
      </ul>
      <button
        onClick={() => {
          dispatch(add('koala'))
        }}
      >
        add koala
      </button>
      <button
        onClick={() => {
          dispatch(remove('cat'))
        }}
      >
        remove cat
      </button>
    </div>
  )
}

export default App
