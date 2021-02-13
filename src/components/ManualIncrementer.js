import React from 'react';

export default class ManualIncrementer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            n: 0
        }
    }

    increment () {
        this.setState((state, props) => {
            return {n: state.n + 1}
        });
    }

    /*
     * When the component is mount
     */
    componentDidMount () {}

    /*
    * When the component is unmount
    */
    componentWillUnmount () {}

    render () {
        return (
            <div>
                Valeur : {this.state.n}
                <button onClick={this.increment.bind(this)}>Incrémenter</button>
            </div>
        );
    }
}