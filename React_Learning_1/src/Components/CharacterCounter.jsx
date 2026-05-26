import Usestate, { useState } from "react";

//-------------Controlled input using react value={text} -----------

function CharacterCounter() {

  const [text, setText] = useState("");

  return (
    <div>

      <h1>Character Counter</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
         }}
      />

      <p>You typed: {text}</p>

      <p>Character Count: {text.length}</p>

      {text.length > 10 && <p>Limit Exceeded</p>}

      <button onClick={()=>{
        setText("");
       }}>Reset</button>

    </div>
  );
}

export default CharacterCounter;