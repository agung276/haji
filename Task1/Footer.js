import React, { Component } from 'react';
import { AppRegistry, 
  View, 
   
  Text, 
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground
  
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class ProfileScreen extends Component {
  

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text}>Nomor Porsi</Text>
          <TextInput style={styles.textinput} placeholder="Masukan Nomor Porsi anda"></TextInput>
          <Button style={{backgroundColor:'green'}} title="Cek Estimasi Keberangkatan"></Button>
        </View>
        <View style={styles.container2}>
        <Text style={styles.text}>Jadwal Keberangkatan</Text>
        <TextInput style={styles.textinput} placeholder="Masukan Nomor Porsi anda"></TextInput>
        <Button style={styles.button} title="Cek Jadwal Keberangkatan"></Button>
      </View>
      <View>
        <Text>Infomrmasi komodasi Jemaah</Text>
        <TextInput placeholder="Masukan Nomor Porsi anda"></TextInput>
        <Button style={styles.button} title="Cek Akomodasi Jemaah"></Button>
      </View>      
    </View>
    </ScrollView>
    );
  }
}



const styles=StyleSheet.create({
  container:{ 
    alignItems:'flex-end',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  container2:{ 
    paddingBottom:20,
    width:430,
    paddingEnd:20,
    
  },
  button:{
    padding:20,
    backgroundColor: 'red',
    margin:10

  },
  text:{
    color:'green',
    fontSize:12
  },
  textinput:{
    borderWidth:2,
    fontSize:25,
    height:80,
    padding:5,
    borderColor:'red'
  }
 
  
  
})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);