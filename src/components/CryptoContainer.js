import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import FetchCoinData from '../Actions/FetchCoinData';

class CryptoContainer extends React.Component {
    componentDidMount() {
        this.props.FetchCoinData();
    }
    render() {
        return (
            <View>
                <Text>Container</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    };
}
//export default CryptoContainer;
export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);