import React from 'react';
import { StatusBar, StyleSheet, Text, View, WebView, Image, ActivityIndicator } from 'react-native';
import { Constants } from 'expo'; // Import expo modules

import renderIf from './renderIf';

var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount(){
        var that = this;

        setTimeout(function(){
            that.setState({isLoading: false});
        }, 5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>

                <WebView
                    source={{uri: 'https://needan-b1674.firebaseapp.com/#!/home'}}
                    style={{width: window.width, height: window.height}}
                />

                {renderIf(this.state.isLoading === true)(
                    <View style={styles.webViewLoader}>
                        <ActivityIndicator size='large' color='#ffffff'/>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    webViewLoader: {
        width: window.width,
        height: window.height,
        position: 'absolute',
        backgroundColor: '#4D81F4',
        alignItems: 'center',
        justifyContent: 'center',
    }
});