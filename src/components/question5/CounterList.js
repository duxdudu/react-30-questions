import { useState } from "react";
import CounterTwo from "./CounterTwo";
import UnrelatedList from "./UnrelatedList";

function CounterList() {
  const [count, setCount] = useState(0);
  const items = ["magic 1", "magic 2", "magic 3", "magic 4"];
  return (
    <div className="comp">
      <CounterTwo count={count} setCount={setCount} />
      <UnrelatedList items={items} />
    </div>
  );
}

export default CounterList;
