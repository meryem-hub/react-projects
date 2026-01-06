import React, { useState } from 'react'
import data from './data'
const Accordion = () => {
    const [selected,setSelected]=useState(null)
  return (
   <div>
   {data && data.length > 0 ? data.map((dataItem)=>(<h1 key={dataItem.id}>{dataItem.question}</h1>)) : <div>DATA NOT FOUND!</div>}
   </div>
  )
}

export default Accordion
