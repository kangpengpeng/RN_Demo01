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
    NavigatorIOS,
    PixelRatio,
    AlertIOS,
    ListView,
    TouchableOpacity,
} from 'react-native';

export default class Home extends Component {

    // 导航栏左侧按钮
    clickLeftBtn() {
        // 提示框
        AlertIOS.alert('leftItemBtn被点击')
    };

    render() {
        return (
            <NavigatorIOS
                initialRoute = {{
                    component: ChildHome,
                    title: '首页',
                    leftButtonIcon: {uri: 'tabbar_discover', scale: PixelRatio.get()},
                    //leftButtonIcon: {require('../images/tabbarIcon/tabbar_discoverHL.png')}
                    onLeftButtonPress: ()=>this.clickLeftBtn(),
                }}
                style = {{flex:1}}
            />
        );
    }
}

var  ChildHome = React.createClass ({

    getDefaultProps() {
        return {
            // url_api: 'http://app.api.autohome.com.cn/autov5.0.0/news/newslist-pm1-c0-nt102-p1-s30-l0.json',
            url_api: 'http://c.m.163.com/nc/article/list/T1350383429665/0-20.html',
            key_word: 'T1350383429665',
        }
    },

    // 初始化方法
    getInitialState() {
        return {
            // ListView头部数据源
            headerDataArr: [],
            // Cell数据源
            dataSource: new  ListView.DataSource ({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    },

    // 生命周期方法，一般用来放加载网络的代码
    componentDidMount(){
        console.log('走到这了');
        this.loadDataFromNet();
    },

    // 加载网络数据
    loadDataFromNet() {
        fetch(this.props.url_api)
            .then((response) => response.json())
            .then((responseJson) => {
                // 处理json数据
                var jsonData = responseJson[this.props.key_word];
                // 传递给函数处理数据
                this.dealWithData(jsonData)
                // return responseJson.movies; //不用加这句话
            })
            .catch((error) => {
                if (error) {
                    // 网络异常，做特殊处理
                    console.log("**********网络异常")
                    console.log(error);
                    console.log("**********网络异常")
                    // 处理json数据
                    var jsonData = responseJson[this.props.key_word];
                    // 传递给函数处理数据
                    this.dealWithData(jsonData)
                }
            })

    },

    // 处理数据
    dealWithData(jsonData) {
        // console.log(jsonData)
        // 业务逻辑
        var headerArr = [], listDataArr = [];
        // 遍历json获取数据
        for (var i = 0; i<jsonData.length; i++) {
            // 取字典
            var dict = jsonData[i];
            // 判断
            if (dict.hasHead == 1) {
                headerArr.push(dict);
            } else {
                listDataArr.push(dict);
            }
        }
        console.log(listDataArr, headerArr);
        // 更新状态机
        this.setState({
            // List头部数据
            headerDataArr: headerArr,
            // cell列表数据源
            // dataSource: this.state.dataSource 这种写法不对
            dataSource: this.state.dataSource.cloneWithRows(listDataArr),
        })
    },

    render() {
        return (

            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow}
            />


/*
 <View style={styles.container}>
 <Text style={styles.welcome}>
 主页
 </Text>
 </View>

*/
            /*
        // 尝试把`justifyContent`改为`center`看看
        // 尝试把`flexDirection`改为`row`看看
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        */

        );
    },





    // 返回一个单独的Cell
    renderRow(rowData) {
        // console.log('***************')
        // console.log(rowData.imgsrc)

        return (
            <TouchableOpacity activeOpacity={0.3}>
                <View style={styles.cellStyle}>
                    {/* 此处放置加载的图片，但是总是报错，未解决 */}
                    <View>
                        <Text style={styles.titleStyle}>
                            {rowData.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
});



const styles = StyleSheet.create({
    cellStyle: {
        flexDirection: 'row',
        height: 100,
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    titleStyle: {

    },
    imgStyle: {
        width: 90,
        height: 90,
    },
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
        backgroundColor: '#257844',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 输出类
module.exports = Home;

