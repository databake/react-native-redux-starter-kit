/* @flow */
/*eslint-disable prefer-const */

import React, {Component, PropTypes} from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
                    {this.props.isFetching ? 'Loading...' : this.props.message}
                </Text>
            </ScrollView>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    message: PropTypes.string,
    isFetching: PropTypes.bool
};

App.defaultProps = {
    dispatch: () => { },
    isFetching: false,
    message: ''
};

export default connect((state) => ({
    isFetching: state.data.isFetching,
    message: state.data.message
}))(App);