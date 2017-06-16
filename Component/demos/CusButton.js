/**
 * Created by kangpengpeng on 2017/6/15.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class CusButton extends Component {

    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {
            disable: false,
        };
    };

    btnAction = () => {
        // alert('点击了确定按钮！！！')
        const {dianjishijian} = this.props;
        dianjishijian();
    };

    enable = () => {
        console.log('还原按钮状态');
        this.setState({
            disable: false,
        })
        // this.state.disable = false
    };

    disable = () => {
        this.setState({
           disable: true,
        });
        // this.state.disable = true
    };


    render() {

        // 这两种写法均可
        // const {text} = this.props;
        // const text = this.props.text;
        const {text, beijingyanse} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    disable={this.state.disable}
                    style={[styles.button, {backgroundColor: beijingyanse}, this.state.disable && styles.disable]}
                    onPress={this.btnAction}
                >
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        borderRadius: 25,
        backgroundColor: "green",
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    disable: {
        backgroundColor: 'gray',
    }
});



