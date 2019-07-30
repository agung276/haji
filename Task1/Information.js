import React, { Component } from 'react';
import { AppRegistry, 
  View, 
   
  Text, 
  StyleSheet,
  Button
  
  
} from 'react-native';


export default class ProfileScreen extends Component {
  

  render() {
    const {navigate} = this.props.navigation;
   
    return (
      <View>
      <Text>Informasi Penting Bos</Text>
      <Button title="Balik Lagi" onPress={()=>navigate("Home")}/>
      </View>

    );
  }
}



const styles=StyleSheet.create({
  welcome:{
    flex:1,
    backgroundColor:'yellow',
    // alignItems:'center',
    // justifyContent:'center',
  },
  button:{
    padding:1,
    backgroundColor: 'red',
    margin:10
  }
 
  
  
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);