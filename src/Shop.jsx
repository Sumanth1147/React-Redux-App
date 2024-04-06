import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <h2>Buy the product</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
       Updated balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
