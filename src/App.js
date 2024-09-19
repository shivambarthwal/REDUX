import "./styles.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementbyAmount,
} from "./features/counter/counterSlice";

export default function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleClickInc() {
    dispatch(increment());
  }
  function handleClickDec() {
    dispatch(decrement());
  }
  function handleClickReset() {
    dispatch(reset());
  }
  function handleIncAmount() {
    dispatch(incrementbyAmount(Number(amount)));
  }
  return (
    <div className="App">
      <button onClick={handleClickInc}>+</button>
      <p>Count :{count}</p>
      <button onClick={handleClickDec}>-</button>
      <button onClick={handleClickReset}>Reset</button>
      <input
        type="Number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncAmount}>Inc button </button>
    </div>
  );
}
