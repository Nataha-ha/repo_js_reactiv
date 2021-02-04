import React from 'react';
import PropTypes from 'prop-types';

export default class Child extends React.Component {

        componentWillMount() {
            console.log('Child componentWillMount');
        }

        componentDidMount() {
            console.log('Child componentDidMount');
        }

        componentDidUpdate() {
            console.log('Child componentDidUpdate');
        }

        render() {
            console.log('Child render');
            return ( < h1 > Это компонент Child, counter: {
                    this.props.counter
                } < /h1>)
            }
        }