import React, {Component} from 'react';

class Counter extends Component {
    state = {count: 0};

    handleDecrementClick = () => {
        let {count} = this.state;
        count--;
        this.setState(prevState => ({count}));
    };

    handleIncrementClick = () => {
        let {count} = this.state;
        count++;
        this.setState({count});
    };

    render() {
        console.log('rendered');
        return (
            <div>
                <button onClick={this.handleDecrementClick}>Decrement -</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleIncrementClick}>Increment +</button>
            </div>
        )
    }
}

export default Counter;
