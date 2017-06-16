/**
 * Created by kangpengpeng on 2017/6/13.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';

export default class ScrollView_Demo extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:20}}>Scroll me plz</Text>

                <Image source={require('../../imgResource/pic0.gif')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />
                <Text style={{fontSize:20}}>If you like</Text>

                <Image source={require('../../imgResource/pic0.gif')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />
                <Text style={{fontSize:20}}>Scrolling down</Text>

                <Image source={require('../../imgResource/pic0.gif')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />
                <Text style={{fontSize:20}}>What's the best</Text>

                <Image source={require('../../imgResource/pic0.gif')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />
                <Text style={{fontSize:20}}>Framework around?</Text>

                <Image source={require('../../imgResource/pic0.gif')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />

                <Image source={require('../../imgResource/pic2.gif')} />

                <Image source={require('../../imgResource/pic1.jpg')} />

                <Text style={{fontSize:20}}>React Native</Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 输出类
module.exports = ScrollView_Demo;

