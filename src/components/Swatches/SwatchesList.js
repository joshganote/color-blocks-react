import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapStoreProps from '../MapStoreProps/MapStoreProps';
import Swatches from '../Swatches/Swatches';

class SwatchesList extends Component {

    render(){
        const blocksArray = this.props.store.blocks.map((item, index) => {
            return (
                <Swatches item={item} key={index} />
            )
        })
        return(
            <div>{blocksArray}</div>
        )
    }
}

export default connect(MapStoreProps)(SwatchesList);