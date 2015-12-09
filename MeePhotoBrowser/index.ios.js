/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var photo = require('./Photo');   // 引入外部模块
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;


var MeePhotoBrowser = React.createClass({

  render: function() {
    return (

      <NavigatorIOS
        style={styles.NavStyle}
        initialRoute={{
          component: photo,
          title: '浏览图片',
        }}/>
    );
  },
});

var styles = StyleSheet.create({
  NavStyle:{
   backgroundColor:'#F2F2F2',
   flex:1,
  },
});

AppRegistry.registerComponent('MeePhotoBrowser', () => MeePhotoBrowser);
