import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapStoreProps from '../MapStoreProps/MapStoreProps';
import Header from '../Header/Header';

class Swatches extends Component {

    componentDidMount () {
        this.props.dispatch({
            type: 'GET_BLOCKS'
        })
    }

    render() {
        return(
            <div>
                 <Header />
            </div>
        )
    }
}

export default connect(MapStoreProps)(Swatches);