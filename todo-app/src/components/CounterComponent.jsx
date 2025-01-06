import react,{useState} from "react";

const CounterComponent = ()=>{
    const [count , setCount] = useState(0);
    const [value, setValue] = useState('Even')
    return (
        <div>
            <p>Conter Component - {count}</p>
            
            <button onClick={()=> setCount(count+1)
            }>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
            <p>Number is {count%2==0?"Even" : "Odd"}</p>
        </div>
    );
};

export default CounterComponent;