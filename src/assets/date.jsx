import React from 'react'
import './../components/StoreSections/Shop/Iphone/gadget.css'

class SetDate extends React.Component {
    constructor() {
        super();

        const today = new Date(),
            date = today.toLocaleDateString()

        this.state = {
            date: date
        };
    }
    render() {
        return (
            <span className='date'>
               {this.state.date}
            </span>
        );
    }
}

export default SetDate;