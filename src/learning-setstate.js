import { Component } from 'react';

class LearningSetState extends Component {
    state = {
        number: 0,
        fixedNumber: 10
    };
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <div>{number}</div>
                <div>{fixedNumber}</div>
            </div>
        )
    }
}

export default LearningSetState;