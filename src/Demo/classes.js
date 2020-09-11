import React, {Component} from 'react';

class User extends Component{
    constructor(props) {
        super(props);
        this.state = { address: 'US' };
    };

    render() {
        return(
            <div>Hi, I'm {this.props.name}, I'm from {this.state.address}!</div>
        )
    }
};

export default User;
