import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Menu extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "", gambar:"./images/promo.jpeg",  navigasi:'Home',   color:"red", members:'Akomodasi',  image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/sleeping.png"},
        {id:2, title: "", gambar:"Task1/images/promo.jpeg",  navigasi:'Test', warna:"#87CEEB", members:'Konsumsi',  image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/food.png"},
        {id:3, title: "", gambar:"Task1/images/promo.jpeg",  navigasi:'Home',  color:"#4682B4", members:'Transportasi', image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/bus.png"} ,
        {id:4, title: "", gambar:"Task1/images/promo.jpeg",  navigasi:'Home',color:"#6A5ACD", members:'Rencana Perjalanan',  image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/route.png"} ,
        {id:5, title: "", gambar:"Task1/images/promo.jpeg", navigasi:'Home',color:"#FF69B4", members:'Jadwal Lontar\n Jumrah',  image:"https://img.icons8.com/color/70/000000/groups.png"} ,
        {id:6, title: "", gambar:"Task1/images/promo.jpeg", navigasi:'Home', color:"#00BFFF", members:'Manasik Haji &\n Umrah',  image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/kaaba.png"} ,
        {id:7, title: "", gambar:"Task1/images/promo.jpeg",  navigasi:'Home',color:"#00FFFF", members:"Peta Lokasi",  image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/pin.png"} ,
        {id:8, title: "", gambar:"Task1/images/promo.jpeg",  navigasi:'Home', color:"#20B2AA", members:'Tutorial Video', image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/tutorial_video.png"} ,
        {id:9, title: "", gambar:"Task1/images/promo.jpeg",navigasi:'Home',color:"#191970", members:"Terjemahan B.Arab", image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/images.jpg"} ,
        {id:10, title: "",gambar:"Task1/images/promo.jpeg",  navigasi:'Home',   color:"#008080", members:'Kumpulan Doa', image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/prayer.png"} ,
        {id:11, title: "",gambar:"Task1/images/promo.jpeg",   navigasi:'Home',  color:"#008080", members:'Layanan Jamaah', image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/customer-support.png"} ,
        {id:12, title: "",gambar:"Task1/images/promo.jpeg",   navigasi:'Home',  color:"#008080", members:'Cuaca', image:"http://puskesmaskersamenak.com/wp-content/uploads/2019/07/hot.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          // horizontal={false}
          numColumns={3}
          // keyExtractor= {(item) => {
          //   return item.id;
          // }}
          renderItem={({item}) => {
            return (              
              <TouchableOpacity style={[styles.card, {backgroundColor:item.warna}]} onPress={() =>navigate(item.navigasi)} >
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  {/* <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/> */}
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                {/* <Image style={styles.cardImage} source ={{uri:item.image}}/> */}
                {/* <Image style={styles.cardImage} source={{uri:'./images/promo.jpeg'}}/> */}
                <View>
                {/* <Image style={styles.cardImage} source={require(item.gambar)}/> */}
                </View>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members} </Text>
                  

                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:1,
    // justifyContent:'center',
    padding:2
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '30%',
    justifyContent:'center',
    alignItems:'center'
  },
  cardHeader: {
    paddingVertical: 1,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    // alignItems:"center", 
    // justifyContent:"center"
  },
  cardContent: {
    // paddingVertical: 12.5,
    // paddingHorizontal: 16,
    // alignItems:'center'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf:"center",
    paddingTop: 12.5,
    paddingBottom: 25,
    // paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    alignItems:"center"
  },
  cardImage:{
    height: 60,
    width: 60,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    alignItems:'center',
    fontSize:13,
    // flex:1,
    color:'red',
    // alignItems:'center'   
    // justifyContent:'center',
    
    
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     