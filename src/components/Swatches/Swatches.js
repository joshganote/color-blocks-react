import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapStoreProps from '../MapStoreProps/MapStoreProps';
import Header from '../Header/Header';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Swatches extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_BLOCKS',
            type: 'GET_COLORS'
        })
    }
    

    render() {

        const colorArray = this.props.store.colors.map((item, index) =>{
            return (
                <div key={index}>
                    
                </div>
            )
        })
        return (
            <div>
                <Header />
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <h4>Label: {this.props.store.blocks.label}</h4>
                            <p>Hex Code: {this.props.store.blocks.hex_code}</p>
                            <Button variant="contained" color="primary">Delete</Button>
                        </Grid>
                    </Grid>
                    
            </div>
        )
    }
}

export default connect(MapStoreProps)(Swatches);