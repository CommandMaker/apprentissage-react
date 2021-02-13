import React from 'react';

export default class Incrementer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.start,
        }
        this.timer = null;
    }

    tick () {
        this.setState((state, props) => {
            return {value: state.value + props.step};
        });
    }

    componentDidMount () {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render () {
        return (
            <div>
                <p>{this.state.value}</p>
            </div>
        );
    }
}
