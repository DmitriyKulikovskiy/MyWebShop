import React from 'react'
import { NavLink } from 'react-router-dom';
import './gadget.css'

const Iphone = ({phones,searchQuery}) => {

  const getSearchItems = searchQuery && searchQuery.trim().length ? phones.filter(p => {
    if(p && p.body && p.body.model && p.body.model.toLowerCase().includes(searchQuery.toLowerCase())){
      return p
    }
  }) : phones

  const iphoneList = getSearchItems.map((p, index) => 
    (<div className="model" key={index}>
      <NavLink to={'/p/' + p.id}>{p.body.model}</NavLink>
    </div>
  ))

  return (
    <div>
      {iphoneList}
    </div>
  );
};

export default Iphone;

