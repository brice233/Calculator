import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
    setOperation(null);
  };

  const calculate = () => {
    if (operation === "+") {
      setResult(parseFloat(result) + parseFloat(input));
    } else if (operation === "-") {
      setResult(parseFloat(result) - parseFloat(input));
    } else if (operation === "*") {
      setResult(parseFloat(result) * parseFloat(input));
    } else if (operation === "/") {
      setResult(parseFloat(result) / parseFloat(input));
    }

    setInput("");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="mb-4">
        <input
          type="text"
          className="w-40 p-2 border rounded-md"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <p className="text-2xl font-bold">Result: {result}</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            className="col-span-1 p-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => setOperation(op)}
          >
            {op}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="w-20 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={clearInput}
        >
          Clear
        </button>
        <button
          className="w-20 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 ml-2"
          onClick={calculate}
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Calculator;
