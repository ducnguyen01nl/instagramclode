import React, { useEffect, useState } from 'react'
import { View,Text, StatusBar,Image, TouchableOpacity, TextInput, Animated, StyleSheet } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

function Status({route,navigation}) {

    const {name} = route.params;
    const {image} = route.params;
    const [progress,setProgress] = useState(new Animated.Value(0))
    const progressAnimation = progress.interpolate({
        inputRange:[0,5],
        outputRange:['0%','100%']
    })
    useEffect(() =>{
        let timer = setTimeout(() =>{
            navigation.goBack();
        },5000);
        Animated.timing(progress,{
            toValue:5,
            duration:5000,
            useNativeDriver:false
        }).start(); 
        return () => clearTimeout(timer)
    },[]);

  return (
    <View
        style={styles.containerStatus}
    >
        <StatusBar backgroundColor='black' barStyle="light-content" />
        <View style={styles.viewBar}>
            <Animated.View style={{height:'100%',backgroundColor:'white',width: progressAnimation}}>
             
            </Animated.View>
        </View>
        <View style={styles.viewInfoPerson}>

            <View
                style={{
                    borderRadius:100,
                    width:30,
                    height:30,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Image source={image} style={styles.imagePerson} />
            </View>
            <View
                style={{justifyContent:"space-between",flexDirection:'row',width:'100%'}}
            >
                <Text style={{ color:'white',fontSize:10,paddingLeft:10}}>{name}</Text>
                <TouchableOpacity onPress={()=> navigation.goBack()}>

                    <Ionic name="close" style={{fontSize:20,color:'white',opacity:0.6}}/>
                </TouchableOpacity>
            </View>
        </View>
        <Image source={image} style={{position:'absolute',width:'100%',height:600}} resizeMethod='cover'/>
        <View style={styles.viewInput}>
            <TextInput placeholder='send message' placeholderTextColor='white'
            style={styles.textInput} />
            <TouchableOpacity onPress={()=> navigation.goBack()}>

                <Feather name='navigation' style={{fontSize:30,color:'white',paddingLeft:10}} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerStatus:{backgroundColor:'black',height:'100%',position:'relative',justifyContent:'center',alignItems:'center'},
    viewBar:{height:3,width:'95%',borderWidth:1,backgroundColor:'gray',position:'absolute',top:18},
    viewInfoPerson:{padding:15,flexDirection:'row',alignItems:'center',position:'absolute',top:12,left:0,width:'90%',},
    imagePerson:{borderRadius:100,backgroundColor:'orange',resizeMode:'cover',width:'92%',height:'92%'},
    viewInput:{width:'100%',position:'absolute',bottom:0,left:0,flexDirection:'row',alignItems:'center',justifyContent:'center',marginVertical:10},
    textInput:{
        borderRadius:25,
        borderColor:'white',
        width:'85%',
        height:50,
        paddingLeft:20,
        borderWidth:1,
        fontSize:20,
        color:'white'
    },
})

export default Status
