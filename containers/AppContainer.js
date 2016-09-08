import React from 'react';
import '../css/styles.css';

import CustomerActivity from '../components/CustomerActivity.js';
import Map from '../components/Map.js';

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {customer: null};
    }
    
    componentDidMount() {        
        const doRequest = () =>  {
            fetch('https://www.getyourguide.com/touring.json?key=2Gr0p7z96D')
                .then((response) => response.json())
                .then((response) => {
                    this.setState({customer: response});
                });
        };
        
        doRequest();
        
        setInterval(doRequest, 10000);
        
    }   

    render() {
        if (!this.state.customer) {
            return (
                <div>
                    Loading...
                </div>
            );
        } else {
            return (
                <div className='app-container'>
                    <div className='app-container__left'>
                        <CustomerActivity customer={this.state.customer}/>
                    </div>
                    <div className='app-container__right'>
                        <Map customer={this.state.customer}/>
                    </div>                   
                </div>
            );
        }
    }
}