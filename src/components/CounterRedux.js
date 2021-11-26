import React, {useState} from 'react'
import {useDispatch, connect} from 'react-redux'
import {increment, decrement} from '../actions/counter'

const mapStateToProps = (state) => ({
  state: state
})

function Counter({state}) {
    const dispatch = useDispatch()

    const onClickIncrement = () =>{
      dispatch(increment)
    }
    const onClickDecrement = () =>{
      dispatch(decrement)
    }
    
    return (
      <div>
        Value: {state.counter.value} <button onClick={onClickIncrement}>Increment</button>
        <button onClick={onClickDecrement}>Decrement</button>
      </div>
    )
  }

export default connect(mapStateToProps)(Counter)
