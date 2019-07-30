import React, { Component } from 'react';
import { AppRegistry, 
  View, 
  // TouchableOpacity, 
  FlatList,
  Alert, 
  Text, 
  StyleSheet,
  Button,
  StatusBar
  
  
  
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class HomeScreen extends Component {
  


  static navigationOptions=({navigation})=>({
    title:"welcome",
    
    headerRight:(
      <Button title="profile" onPress={()=>navigation.navigate("Profile")}/>
     ),     
    headerStyle:{
      backgroundColor:"green"
    },
    headerTintColor:"white"
  })
  
     
  render() {
    const {navigate} = this.props.navigation;
    
    return (
     
      <View style={styles.container}>
        <View>
          <StatusBar 
          barStyle="Light-content"
          // hidden={true}
          />
        </View>
        <View style={styles.container2}>
          <Text>Container untuk slider</Text>
          <Button title="slider" onPress={()=>navigate("Slider")}/>
        </View>
        <View style={styles.container3}>
          <Text>Container untuk Grid</Text>
          <Button title="GRID" onPress={()=>navigate("Body")}/>
        </View>
        <View style={styles.container4}>
          <Text>Estimasi Keberangkatan</Text>
          <Button title="BUTTOn SEARCH" onPress={()=>navigate("Footer")}/>
        </View>
        <View style={styles.container1}>
          <Text style={{fontSize:30, fontWeight:'bold'}}>Testing</Text>
          <Button title="TEST AJA" onPress={()=>navigate("Test")}/>
        </View>
          
      </View>
      
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  },
  container2:{
    flex:2,
    backgroundColor:'red',
    justifyContent:'center',
    flexDirection:'column',
    


  },
  container3:{
    flex:4,
    backgroundColor:'green'
  },
  container4:{
    flex:1,
    backgroundColor:'blue'
  },
  button:{
    padding:1,
    backgroundColor: 'red',
    margin:10
  }
 
  
  
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);