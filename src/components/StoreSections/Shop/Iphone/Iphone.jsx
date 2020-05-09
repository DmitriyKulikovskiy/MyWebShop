import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './gadget.css'
import { getPhone } from '../../../../API/getApiJson';

const Iphone = () => {

  const [iphone, setIphone] = useState([]);

  useEffect(() => {
      getPhone.then(({data}) => {
        setIphone(data)
      })
    },[]
  )
  
  const filterIphone = iphone.map((p, index) => 
    (<div className="model" key={index}>
      <NavLink to={`/CurrentIphone/${p.id}`}>{p.body.model}</NavLink>
    </div>
  ))

  return (
    <div>
      {filterIphone}
    </div>
  );
};

export default Iphone;