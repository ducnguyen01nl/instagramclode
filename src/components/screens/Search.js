import React, { useState } from 'react'
import { View,Text,Image, ScrollView, TouchableOpacity, StatusBar, Dimensions,StyleSheet } from 'react-native'
import SearchBox from '../screenComponents/SearchBox'
import SearchContent from '../screenComponents/SearchContent'
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
function Search() {

  const [image,setImage] = useState(null);
  const getData = data =>{
    setImage(data);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.containerSearch}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBox />
          <SearchContent data={getData} />
          <TouchableOpacity style={{margin:25,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name='pluscircleo' style={{fontSize:40,opacity:0.5}} />
          </TouchableOpacity>
        </ScrollView>
        {
          image ? (
            <View style={styles.viewImage}>
              <StatusBar backgroundColor="#525252" barStyle="dark-content" />
              <View style={{
                position:'absolute',
                left: windowWidth/18,
                top:windowHeight/6,
                backgroundColor:'white',
                width:350,
                height:465,
                borderRadius:15,
                zIndex:1,
                elevation:50,
                
              }}>
                <View style={styles.itemSearch}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={image} style={{width:30,height:30,borderRadius:100}} />
                    <View style={{paddingLeft:8}}>
                      <Text style={{fontSize:12,fontWeight:'bold'}}>the_anonymous_guy</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() =>setImage(null)}>
                    <Ionic name="close" style={{fontSize:20,color:'black',opacity:0.6}}/>
                  </TouchableOpacity>
                </View>
                <Image source={image} style={{width:'100%',height:'80%'}} />
              </View>
            </View>
          ) : null
        }

    </View>
  )
}

const styles = StyleSheet.create({
  containerSearch:{width:'100%',height:'100%',backgroundColor:'white',position:"relative"},
  viewImage:{position:'absolute',zIndex:1,width:'100%',height:'100%',backgroundColor:'rgba(52,52,52,52,0.8)'},
  itemSearch:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:10,paddingHorizontal:15},
})

export default Search
