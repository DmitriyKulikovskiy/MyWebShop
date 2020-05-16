import React, {useState} from 'react'
import './gadget.css'
import { NavLink } from 'react-router-dom';

const iconDone = <img src="https://img.icons8.com/color/48/000000/checkmark.png"/>
const rating = <img src="https://img.icons8.com/color/48/000000/hand-drawn-star.png"/>

const CurrentIphone = ({phones,match,addToCart}) =>{
 
    const {params} = match; 
    const {id} = params;
  
    const [showMore, setShowMore] = useState(false);

    const useShowMore = () => {
      setShowMore(!showMore);
    }


    return(
      <div className='container'>
        <div className='gadget-container'> 
          {phones.map(el => el.id === id 
            ? <div key={el.id}>
                <div className='gadget-title'>{el.body.model}</div>
                <hr />
                <div className='gadget-available'>{iconDone} {el.body.available}</div>
                <div className='gadget-rating'>{rating}Rating: <span>10</span></div>
                <div className='gadget-price'>Price: {el.body.price}$</div>
                <div className='gadget-delivery-options'>Read more about: <NavLink to='/Delivery'>delivery shipping</NavLink></div> 
                <div className='gadget-img'><img src={el.body.photo}/></div>
                <div className='gadget-description'>
                  <span>Description:</span>
                  <br />
                  Camera Resolution: {el.body.description.cameraResolution} 
                  <br />
                  Front Camera: {el.body.description.frontCamera}
                  <br />
                  Processor: {el.body.description.processor}
                  <br />
                  Screen Size: {el.body.description.screenSize}
                  <br />
                  RAM: {el.body.description.ram}
                </div>
                <div className='gadget-show-more'>
                  <span onClick={useShowMore}>more info</span>
                  <div className={showMore === false ? 'gadget-hide-info' : 'gadget-hide-info-show' }>
                    The information will be soon.
                  </div>
                </div>
                <hr />
                <button onClick={() => addToCart(el)}  className='gadget-add-to-cart'><span>Add to cart </span></button>
               </div> 
            : null)
          }
        </div>
      </div>
    )
  }

export default CurrentIphone