import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    render() {
        return (
            <div>
                <h1>
                    ¡HOLA!
                </h1>
            </div>
        );
    }
}


Greeting.propTypes = { // basicamente son el contenido que se le puede pasar desde uno de orden superior

};


export default Greeting;
