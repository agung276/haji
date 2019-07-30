import React, { Component } from 'react';
import { Text,Dimensions, View,Image } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
const DeviceWidth = Dimensions.get('window').width


export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          // title: 'Title 1',
          // caption: 'Caption 1',          
          url: 'http://jakartainsight.com/upload/medium/1531936029haji_pintar.jpg',
        }, {
          // title: 'Title 2',
          // caption: 'Caption 2',
          url: 'https://pressrelease.kontan.co.id/timthumb.php?src=./uploads/release/Garuda_dan_Kemen.jpg&w=785',
        }, {
          // title: 'Title 3',
          // caption: 'Caption 3',
          url: 'https://indopos.co.id/assets/images/news/2019/06/5d0b2654744e91561011796-kemenag.jpg',
        },{
          // title: 'Title 3',
          // caption: 'Caption 3',
          url: 'http://banten.kemenag.go.id/hphotos/uploads/2017/04/Pelunasan-Haji-Reguler-Tahap-2.jpg',
        },{
          // title: 'Title 3',
          // caption: 'Caption 3',
          url: 'https://haji.kemenag.go.id/v3/sites/default/files/field/image/data%20humas.jpeg',
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length 
          ? 0 : this.state.position + 1
        });
      }, 1500)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (      
      <View>
    <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
    <Text>test percoban</Text>
    
      <View>
      <Text>test percoban</Text>
      
       </View>
    </View>
    );
  }
}
