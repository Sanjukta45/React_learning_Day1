import UseState, { useState } from 'react'
function Counter(){
    const [count,SetCount] = useState(0);
    return (
        <div style= {{
            padding : "10px",
            marginBottom : "20px"

        }}>
            <h1>Counter : {count}</h1>
            <button style = {{margin : "7px"}} onClick ={()=>{
                SetCount(count+1);
            }}>Increment</button>

            <button style = {{margin : "7px"}}  onClick = {()=>{
                SetCount(count-1);
            }}>Decrement</button>

            <button style = {{margin : "7px"}}  onClick={()=>{
                SetCount(0);
            }}>Reset</button>

            {count < 0 && <p>Too Low</p>}
        </div>

    );
}

export default Counter;