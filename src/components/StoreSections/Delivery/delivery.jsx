import React from 'react'
import './delivery.css'
import { delivery, fastDelivery, fasterDelivery, fastestDelivery } from '../../../assets/text'
import { fast, faster, fastest, phone } from '../../../assets/icons'

const  Delivery = () => {
    return (
        <div className='container'>
            <div className='delivery-container'>
                <div className='title'>
                    Here are the available shipping options
                </div>
                <hr />
                <div>
                    {delivery}
                </div>
                <br /> 
                <div className='content-fast'>
                   {fast}<div>{fastDelivery}</div>
                   <hr/>
                   {faster}<div>{fasterDelivery}</div>
                   <hr/>
                   {fastest}<div>{fastestDelivery}</div>
                </div>  
                <hr/>
                <div className='call'>Would you like to know more? Call: <span>+380 577 555 500</span> {phone}</div>
            </div>
        </div>
    )
}

export default Delivery
