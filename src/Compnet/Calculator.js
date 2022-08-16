import { useState } from "react";
import "../Compnet/calculate.css";
function Calculator() {
  const [data2, setData2] = useState();
  const handleClick = (e) => {
    setData2(data2.concat(e.target.name));
  };
  console.log(data2);
  return (
    <div className="calculator">
      <input type="text" value={data2}></input>
      <br></br>
      <br></br>
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button name="1" onClick={handleClick}>
        1
      </button>
    </div>
  );
}
export default Calculator;
