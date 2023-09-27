import React from 'react'
import { View,StyleSheet, TextInput } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons";

function SearchBox() {
  return (
    <View style={styles.containerSearchBox}>
        <Ionic name='search' style={styles.icon} />
        <TextInput placeholder='Search' placeholderTextColor='#909090' style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerSearchBox:{justifyContent:'center',alignItems:'center',width:'100%',paddingVertical:10,position:'relative'},
  icon:{fontSize:18,opacity:0.7,position:'absolute',zIndex:1,left:25},
  textInput:{width:'94%',backgroundColor:'#EBEBEB',borderRadius:10,alignItems:'center',justifyContent:'center',fontSize:15,padding:4,paddingLeft:40}
})

export default SearchBox
