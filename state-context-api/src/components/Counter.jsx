import {useContext} from "react";
import { CounterContext } from "../context/counter";
const Counter = ()=>{
    const counterContext = useContext(CounterContext);
    return (
        <div>
        <button onClick={()=>{counterContext.setCount(counterContext.count+1)}}>Increment</button>
        <button onClick={()=>{counterContext.setCount(counterContext.count-1)}}>Decrement</button>
        </div>
    );
};

export default Counter;