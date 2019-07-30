import React, { Component } from 'react';
import { AppRegistry, 
  View, TouchableOpacity, 
  Flatlist, Alert, Text, StyleSheet,Image, Button, TextInput, ScrollView
} from 'react-native';


export default class AlignItemsBasics extends Component {
  state={
    count:''
  }
  _onPressButton(){
    Alert.alert('Kamu Klik ini bos');
  }
  render() {
    const{count}=this.state;
    let pic={
      uri:'https://source.unsplash.com/daily'
    }
    
    return (
        <View style={styles.welcome}>
      <ScrollView horizontal={true}>
      <View style={styles.welcome}>
        <View style={styles.button}>
        <Button color='black' onPress={()=> {Alert.alert('Hello');}} title="press me"/>
        </View>
        <View style={styles.button}>
        <Button color='black' onPress={this._onPressButton} title="press me"/>
        </View>
        <TouchableOpacity onPress={this._onPressButton}>
         <View><Text>vvv</Text></View>
           
        </TouchableOpacity>
        
        <Text style={{fontSize:60}}>ggggggggggggggggggg</Text>
        
      </View>
      </ScrollView>
      </View>

    );
  }
}

class Nama extends Component{
  render(){
    return(
      <Text> {this.props.name}</Text>
    )
  }
}

const styles=StyleSheet.create({
  welcome:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    padding:1,
    backgroundColor: 'red',
    margin:10
  }
 
  
  
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);