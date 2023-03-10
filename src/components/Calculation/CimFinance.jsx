import React from 'react'
import { useState } from "react";
const CimFinance = ({price}) => {

  ///need to add price using graphql

  const [selected, setselected] = useState(12);

  //cim finance missleading credit condiotion => with 10% of product value
  
  const interestrate = 1.12;//as per cim finance website
  const interestprice = Math.round(price * interestrate) ;
  const withdeposit = interestprice / 1.10;
  const cimprice = Math.round(withdeposit / selected) ;
  

  return (
    <div className="flex justify-center items-center gap-2">
        <p className="font-semibold text-primary">Rs {cimprice} x</p>
        <select className="border rounded-lg text-primary p-1" 
        value={selected} 
        onChange = {e => setselected(e.target.value)}>
          <option>6</option>
          <option>12</option>
          <option>18</option>
          <option>24</option>
          <option>36</option>
          <option>48</option>
        </select>
      <p className="text-primary">Months *</p>
    </div>
  )
}

export default CimFinance