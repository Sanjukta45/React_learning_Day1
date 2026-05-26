import UseState , {useState} from "react";

function PasswordChecker(){
    const [text,setText] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
    <div>
    
    <h1>PassWord Checker</h1>
   
    <input type={showPassword ? "text" : "password"}
    value={text} 
    placeholder="Enter Password" 
    onChange={(e)=>{setText(e.target.value)}}/>

    <button onClick={()=>{setShowPassword(!showPassword)}}>Show Text</button>
    {text.length > 8 && <p>Password limit exceeded</p>}
</div>
);
}

export default PasswordChecker;