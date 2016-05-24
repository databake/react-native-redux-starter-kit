/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import App from '../containers/app';
import NavigationBar from './navigation-bar';

export default class Scene extends Component {

    renderScene(route: Object, navigator: Object) {
        const Component = route.component;
        return (
            <View style={{ flex: 1 }}>
                <NavigationBar
                    backgroundStyle={{ backgroundColor: '#eee' }}
                    navigator={navigator}
                    route={route}
                    title={route.title}
                    titleColor='#333'
                    />
                <Component
                    navigator={navigator}
                    route={route}
                    {...route.passProps}
                    />
            </View>
        );
    }

    render() {
        return (
            <Navigator
                style={{ flex: 1 }}
                renderScene={this.renderScene}
                initialRoute={{
                    component: App,
                    title: 'Redux Starter Kit'
                }}
                />
        );
    }
}