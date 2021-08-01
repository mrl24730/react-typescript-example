import React from "react";
import { useState } from "react";
import { TextField } from "./TypeField";
import { ReducerExample } from "./ReducerExample";
import { Counter } from "./Count";

const App: React.FC = () => {
  const [word, setWord] = useState<string>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWord(e.target.value);
  }

  return (
    <div>
      <p>{word}</p>
      <TextField
        text="as"
        person={{ firstName: "", lastName: "" }}
        handleChange={handleChange}
      />
      <ReducerExample />
      <Counter>
        {(count, setCount) => {
          return (
            <div>
              {count}
              <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            </div>
          );
        }}
      </Counter>
    </div>
  );
};

export default App;
