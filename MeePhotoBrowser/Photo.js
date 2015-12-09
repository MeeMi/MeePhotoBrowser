'use strict';
var React = require('react-native');

var {
  	StyleSheet,
  	Text,
  	View,
  	Image,
  	TouchableHighlight,
} = React;

var Dimensions = require('Dimensions');
var index = 0;
var titles = ['猜你喜欢','青春校园','那年今日','琅琊榜','阳光很暖','海鸥','千古','燕归巢','秦时明月','童年','轨道'];
var Photo = React.createClass({
  // 初始化状态
  getInitialState: function(){
    return{
        imageUri: 'file:///Users/Lee/MeePhotoBrowser/image/'+index+'.jpg',
       
    };
  },


  // 渲染
  render: function() {

   // var {
   //    width,
   //    height
   //  } = Dimensions.get('window');
    var num = (index+1) + '/'+ (titles.length);
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle}
          // source={require('image!img_02')}
          // source = {{uri: 'file:///Users/Lee/MeePhotoBrowser/image/300-1.jpeg'}}
          // source = {{uri: 'https://www.baidu.com/img/bd_logo1.png'}}
          source = {{uri: this.state.imageUri}}
        />

        <Text style={styles.welcome}> 
          {num}
          {'\n'}
          {titles[index]}</Text>

       <TouchableHighlight onPress={this.onPressed_btn}>
         <Image style={styles.buttonStyle}
        	source={{uri: 'file:///Users/Lee/MeePhotoBrowser/image/300.jpeg'}}
      		><Text style={styles.buttonTextStyle}>切换图片</Text>
     	 </Image>
    	</TouchableHighlight>
      </View>
    );
  },


  onPressed_btn() {
    this.changePic();
  },

  // 修改图片
  changePic : function(){
    index++;
    if (index > 10) {index = 0};
    var imageUri ='file:///Users/Lee/MeePhotoBrowser/image/'+index+'.jpg';
    this.setState({imageUri:imageUri});
  	// console.log('button pressed !'+ this.state.total);
  }

});

var styles = StyleSheet.create({
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

  imageStyle: {
    width : 300,
    height: 300,
    backgroundColor:'#2B85CA',
  },

  buttonStyle: {
    height: 36,
    width: 100,
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems:'center',
  },

  buttonTextStyle:
  {
    backgroundColor:'#00',    
  },

});

module.exports = Photo;