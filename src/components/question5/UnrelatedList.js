import React, { memo } from "react";

const UnrelatedList = memo(({ items })=>{
  console.log("UnrelatedList component rendered!");
  return (
    <div className="comp">
      <h2>Unrelated Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
})

export default React.memo(UnrelatedList);
