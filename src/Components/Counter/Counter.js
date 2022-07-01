import React, { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment,setCustom } from '../../redux/state/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    let customValue = useRef();
    return (
        <div>
           <div className="card ">
            <div className=" text-white card-header bg-secondary">
                Counter Application
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4 d-flex">
                    <button onClick={()=>dispatch(increment())} className="btn btn-success mx-2">Increase</button>
                    <button onClick={()=>dispatch(decrement())} className="btn btn-danger">Drcrease</button>
                </div>
                <div className="my-4">
                    <input ref={customValue} type="number" className="form-control w-50 my-2" />
                    <button onClick={()=>dispatch(setCustom(parseInt(customValue.current.value)))} className="btn btn-primary w-50">set custom</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Counter;