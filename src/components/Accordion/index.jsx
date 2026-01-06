import React, { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentID){
setSelected(getCurrentID === selected ? null : getCurrentID)
  }
  console.log(selected)
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="text-center bg-red-400 m-4" onClick={()=>handleSingleSelection(dataItem.id)}>
            <h1  className="text-center text-3xl">
              {dataItem.question}
            </h1>
            <span className="text-3xl">+</span>
              {selected===dataItem.id ? <div className="font-8xl"> {dataItem.answer}</div> : null}
          </div>
        
        ))
      ) : (
        <div>DATA NOT FOUND!</div>
      )}
    </div>
  );
};

export default Accordion;
