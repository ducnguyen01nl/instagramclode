import React from 'react'
import { View,Text,Dimensions,StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import ReelsComponent from '../screenComponents/ReelsComponent';

function Reels() {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.containerReels,{width:windowWidth,height:windowHeight,}]}>
        <View style={styles.viewReels}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Reels</Text>
          <Feather name='camera' style={{fontSize:25,color:'white'}}/>
        </View>
        <ReelsComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  containerReels:{backgroundColor:'white',position:'relative',backgroundColor:'black'},
  viewReels:{position:'absolute',top:0,left:0,right:0,flexDirection:'row',justifyContent:'space-between',zIndex:1,padding:10}
})

export default Reels
