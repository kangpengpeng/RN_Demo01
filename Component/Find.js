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
    TextInput,
} from 'react-native';

export default class Find extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (

            /*
            ***************
             <View style={styles.container}>
             <Text style={styles.welcome}>
             发现
             </Text>
             </View>
             *************** inputView
             <View style={styles.container}>
             <TextInput
             style={{height: 40,
             width: 200,
             alignment: 'center',
             borderColor: 'gray',
             borderWidth: 1,
             backgroundColor: '#F5FCFF',}}
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
             />
             <Text style={{padding: 10, fontSize: 42}}>
             {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
             </Text>
             </View>


             */

            <View style={styles.container}>
                <TextInput
                    style={{height: 40, width: 200, borderWidth: 2, borderColor: 'gray'}}
                    placeholder="输入字符串!"
                    onChangeText={(text) => this.setState({text})}
                />

                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>


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
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 输出类
module.exports = Find;

