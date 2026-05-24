import UseState, { useState } from 'react'
function Counter(){
    const [count,SetCount] = useState(0);
    return (
        <div style= {{
            padding : "10px",
            marginBottom : "20px"

        }}>
            <h1>Counter : {count}</h1>
            <button onClick ={()=>{
                SetCount(count+1);
            }}>Increment</button>
        </div>

    );
}

export default Counter;