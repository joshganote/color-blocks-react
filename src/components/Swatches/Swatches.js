import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapStoreProps from '../MapStoreProps/MapStoreProps';
import Header from '../Header/Header';

class Swatches extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_BLOCKS'
        })
    }

    render() {

        const blockArray = this.props.store.blocks.map((item, index) => {
            return (
                <div key={index}>
                    <p>{item.label}</p>
                    <p>{item.hex_code}</p>
                </div>
            )
        })
        return (
            <div>
                <Header />
                {blockArray}
            </div>
        )
    }
}

export default connect(MapStoreProps)(Swatches);