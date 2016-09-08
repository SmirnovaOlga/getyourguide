import React from 'react';

export default class CustomerActivity extends React.Component {

    static propTypes = {
        customer: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { customer } = this.props;       
        return (
            <div>
                <p> Customer name: {customer.customerFirstName} </p>
                <p> Activity: {customer.activityTitle} </p>
                <p>
                    <img src={customer.activityPictureUrl} className='customer-activity__image'/>
                </p>
            </div>
        );
    }   
}