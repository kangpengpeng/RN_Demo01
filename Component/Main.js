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
    TabBarIOS,
    NavigatorIOS,
    PixelRatio,
    Button,
} from 'react-native';
import Find from "./Find";

import CusButton from "./demos/CusButton";
// import ZhouqiHanshu from "./demos/ZhouqiHanshu"

// 引入外部组件
var Home = require('../Component/Home');
var Fine = require('../Component/Find');
var Me = require('../Component/Me');
var Message = require('../Component/Message');

// 滚动视图Demo
var ScrollView = require('./demos/ScrollView_Demo');
// FlatList视图Demo
var FlatListView = require('./demos/FlatList_Demo');


var Main = React.createClass ({

    // 初始化方法
    getInitialState() {
        return {
            // 定义一个变量，保存选中的TabBarItem
             selectedItem: 'home' // 默认home
        }
    },

    submit2(callBack) {

    },

    submit() {
        console.log('此处是打印调试的地方');
        // 禁用按钮
        this.refs.btn.disable();
        // 提交
        // 延迟后执行一次
        this.timer = setTimeout(() => {
            this.refs.btn.enable();
            alert('zoudaozehle');
        }, 3000);
    },
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        // this.timer && clearInterval(this.timer);
    },



    render() {
        console.log('render')

        return (
            <TabBarIOS
                tintColor = 'orange'
            >
                {/*首页*/}
                <TabBarIOS.Item
                    // icon = {{uri:'tabbar_mainframeHL', scale:2}}
                    icon = {require('../images/tabbarIcon/tabbar_mainframe.png')}
                    selectedIcon = {require('../images/tabbarIcon/tabbar_mainframeHL.png')}
                    title = '首页'
                    selected = {this.state.selectedItem == 'home'}
                    onPress = {()=>this.setState({selectedItem:'home'})}
                >

                    {/* 测试Demo*/}
                    {/*******************  测试周期函数  *******************/}
                    {/*<ZhouqiHanshu></ZhouqiHanshu>*/}

                     {/********************  滚动视图  *******************/}
                     {/*<ScrollView/>*/}
                     {/*<FlatListView/>*/}
                     {/*<Button title = "确定" color = "#897322" />*/}

                    {/*******************  自定义按钮  *******************/}
                    {/*<View style={styles.container}>*/}
                        {/*<CusButton text="确定" beijingyanse="red" dianjishijian={()=>{alert('点击确定按钮')}}/>*/}
                        {/*<CusButton text="取消" beijingyanse="green" dianjishijian={()=>{alert('点击取消按钮')}}/>*/}
                        {/*<CusButton ref="btn" text="提交" beijingyanse="red" dianjishijian={this.submit}/>*/}
                    {/*</View>*/}

                    {/*******************  网络数据列表  *******************/}
                    <Home></Home>



                </TabBarIOS.Item>
                {/*消息*/}
                <TabBarIOS.Item
                    // 获取图片缩放比例
                    // icon = {{uri:'tabbar_mainframe', scale:PixelRatio.get()}}
                    icon = {require('../images/tabbarIcon/tabbar_contacts.png')}
                    selectedIcon = {require('../images/tabbarIcon/tabbar_contactsHL.png')}
                    title = '消息'
                    selected = {this.state.selectedItem == 'message'}
                    onPress = {()=>this.setState({selectedItem:'message'})}
                >
                    <NavigatorIOS
                        initialRoute = {{
                            component: Message,
                            title: '消息'
                        }}
                        style = {{flex:1}}
                    />
                </TabBarIOS.Item>
                {/*发现*/}
                <TabBarIOS.Item
                    // icon = {{uri:'tabbar_mainframe', scale:PixelRatio.get()}}
                    icon = {require('../images/tabbarIcon/tabbar_discover.png')}
                    selectedIcon = {require('../images/tabbarIcon/tabbar_discoverHL.png')}
                    title = '发现'
                    selected = {this.state.selectedItem == 'find'}
                    onPress = {()=>this.setState({selectedItem:'find'})}
                >
                    <NavigatorIOS
                        initialRoute = {{
                            component: Find,
                            title: '发现'
                        }}
                        style = {{flex:1}}
                    />
                </TabBarIOS.Item>
                {/*我的*/}
                <TabBarIOS.Item
                    // icon = {{uri:'tabbar_mainframe', scale:3}}
                    icon = {require('../images/tabbarIcon/tabbar_me.png')}
                    selectedIcon = {require('../images/tabbarIcon/tabbar_meHL.png')}
                    title = '我的'
                    selected = {this.state.selectedItem == 'me'}
                    onPress = {()=>this.setState({selectedItem:'me'})}
                >
                    <NavigatorIOS
                        initialRoute = {{
                            component: Me,
                            title: '我的'
                        }}
                        style = {{flex:1}}
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
})

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
module.exports = Main;

