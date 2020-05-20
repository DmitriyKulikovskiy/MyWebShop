import React from 'react'
import './checkout.css'

const closeModal = <img src="https://img.icons8.com/plasticine/100/000000/close-window.png"/>

const Checkout = ({modalStatus,callModal,shoppingCart}) => {

    return (
        <div>
           {shoppingCart.length >= 1 ? 
                <div className={modalStatus === false ? 'closeCheckout' : 'showCheckout'} >
                    <div className='modal-form'>
                        <div className='container'>
                            <div className='modal-container'>
                                <div onClick={callModal} className='close-modal'>{closeModal}</div>
                                    
                                <div className='title-commission'>Processing of your commission</div>
                                <hr />
                                <div className='personal-information'>Personal information:</div>
                                    <form >
                                        <div class="form-row justify-content-center">
                                            <div class="form-group col-md-4">
                                                <label for='personal-name'>First name</label>
                                                <input id='personal-name' className="form-control" type='text'/> 
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for='personal-surname'>Last name</label>
                                                <input id='personal-surname' className="form-control" type='text'/>
                                            </div>
                                        </div>
                                        <div class="form-row justify-content-center">
                                            <div class="form-group col-md-4">
                                                <label for='personal-email'>Email</label>
                                                <input id='personal-email' className="form-control" type='email'/>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for='personal-phone-number'>Phone</label>
                                                <input id='personal-phone-number' className="form-control" type='tel'/>
                                            </div>
                                        </div>
                                        <div class="form-row justify-content-center">
                                            <div class="form-group col-md-4">
                                                <label for='personal-city'>City:</label>
                                                <input id='personal-city' className="form-control" type='text'/>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for='personal-address'>Shipping address:</label>
                                                <input className="form-control" id='personal-address' type='text'/>
                                            </div>
                                        </div> 
                                        <div className='shipping'>Parcel shipping:</div>
                                        <hr />
                                        <div className='shipping-way'>Shipping way</div>
                                        <div className='row justify-content-center'>
                                            <select className="col-md-4 custom-select custom-select-sm">
                                                <option>From the shop(free)</option>
                                                <option>By a courier</option>
                                                <option>Express</option>
                                            </select>
                                        </div>
                                        <div className='shipping-payment'>Payment:</div>
                                        <div className='row justify-content-center'>
                                            <select className="col-md-4 custom-select custom-select-sm">
                                                <option>Cash payment</option>
                                                <option>By card</option>
                                            </select>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="contact-me" />
                                            <label className="custom-control-label" for="contact-me">You may not contact me</label>
                                        </div>
                                        <hr />
                                        <div className='checkout-purchases'>
                                            <div className='title-purchases'>Your purchases:</div>
                                            <div className='total-sum'>
                                                Total sum: {shoppingCart.reduce((total,iphone) => total + +iphone.body.price, 0 )}$
                                            </div>
                                            {shoppingCart.map(p => 
                                                <div className='checkout-purchase-item'>
                                                    <div className='purchases'>
                                                        <img alt='iconShop' className='iconCart' src={p.body.photo}/>
                                                        {p.body.model} - {p.body.price}$
                                                    </div>
                                                </div>    
                                            )}
                                        </div>
                                        <button type='submit'>Confirm the order</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div> 
           : null}
        </div>
    );
}

export default Checkout