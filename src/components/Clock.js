import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.timer = null;
    }

    tick () {
        this.setState({date: new Date()});
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
                <p>Nous sommes le {this.state.date.toLocaleDateString()} et il est {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}