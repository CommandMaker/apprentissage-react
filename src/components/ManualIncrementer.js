import React from 'react';

export default class ManualIncrementer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            n: 0
        }
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

            </div>
        );
    }
}