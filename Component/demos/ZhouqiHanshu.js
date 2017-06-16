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
    View
} from 'react-native';

var ZhouqiHanshu = React.createClass ({


    getDefaultProps() {
        console.log('---> getDefaultProps55');
        return {}
    },
    getInitialState() {
        console.log('---> getInitialState')
        return {}
    },
    componentWillMount() {
        console.log('---> componentWillMount')
    },
    componentDidMount() {
        console.log('---> componentDidMount')
    },
    componentWillUnmount() {
        console.log('---> componentWillUnmount')
    },

    render() {
        console.log('---> render')
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    测试周期函数
                </Text>
            </View>
        );
    }
});

// 输出类
module.exports = ZhouqiHanshu;

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
});

