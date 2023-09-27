import React, { useRef, useState,useEffect } from 'react'
import { View,Dimensions, TouchableOpacity,Image,Text, StyleSheet } from 'react-native'
import {Video} from 'expo-av';
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const SingleReel = ({item,index,currentIndex}) => {

    
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [volume,setVolume] = useState(1.0);
  const [like, setLike] = useState(false);

  const videoRef = useRef(null);
  const navigation = useNavigation();

  const onBuffer = buffer =>{
    console.log('====================================');
    console.log("buffing",buffer);
    console.log('====================================');
  };
  const onError = error =>{
    console.log('====================================');
    console.log("error",error);
    console.log('====================================');
  }

  // useFocusEffect(
  //   React.useCallback(() =>{
  //     console.log('====================================');
  //     console.log(currentIndex);
  //     console.log('====================================');
  //     if(currentIndex === index){
  //       videoRef.current.shouldPlay = true;
  //     }
  //     else{
  //       videoRef.current.shouldPlay = false;
  //   }

  //   },[currentIndex])
  // )

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', (e) => {
  //     // Xử lý sự kiện khi chuyển tab bottom
  //     console.log('Tab Pressed from OtherScreen');
  //     setVolume(0)
  //   });

  //   // Lưu ý: Đảm bảo hủy đăng ký sự kiện khi component unmount
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <View style={{width:windowWidth,height:windowHeight,position:'relative'}}>
      <TouchableOpacity 
      activeOpacity={0.9}
            onPress={() =>{
              volume ? setVolume(false) : setVolume(1.0);
            }}
            style={{
                width:'100%',
                height:'100%',
                position:'absolute'
            }}>
        <Video 
            ref={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            shouldPlay={currentIndex == index ? true : false}
            isLooping
            volume={volume}
            repeat={true}
            resizeMode='cover'
            // paused={currentIndex == index ? false : true}
            source={item.video}
            style={{
                width:'100%',
                height:'100%',
                position:'absolute'
            }}
        />
      </TouchableOpacity>
      <Ionic name='volume-mute' 
        style={[styles.iconVolume,{fontSize:volume ? 0 :20,top:windowHeight/2.3,left:windowWidth/2.3,padding:volume ? 0 :20}]} />
      
      <View style={{position:"absolute",width:windowWidth,zIndex:1,bottom:60,padding:10}}>
        <View style={{}}>
          <TouchableOpacity style={{width:150}}>
            <View style={{width:100,flexDirection:'row',alignItems:'center'}}>
              <View style={styles.viewImage}>
                <Image source={item.postProfile} style={styles.image} />
              </View>
                <Text style={{color:'white',fontSize:20}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color:'white',fontSize:14,marginHorizontal:10}}>{item.description}</Text>
          <View style={{flexDirection:'row', padding:10}}>
            <Ionic name="ios-musical-note" style={{color:'white',fontSize:16}} />
            <Text style={{color:'white'}}>Original Audio</Text>
          </View>
        </View>
      </View>

      <View style={styles.viewFunction}>
        <TouchableOpacity style={{padding:10}}
          onPress={() =>setLike(!like)}
        >
            <AntDesign name={like ? "heart" : "hearto"} style={{ color:like ? "red" : "white",fontSize:25}}/>
            <Text style={{color:'white'}}>{item.likes}</Text>
        </TouchableOpacity >
        <TouchableOpacity style={{padding:10}}>
          <Ionic name='ios-chatbubble-outline' style={{color:'white',fontSize:25}} />
        </TouchableOpacity>
        <TouchableOpacity style={{padding:10}}>
          <Ionic name='paper-plane-outline' style={{color:'white',fontSize:25}} />
        </TouchableOpacity>
        <TouchableOpacity style={{padding:10}}>
          <Feather name='more-vertical' style={{color:'white',fontSize:25}} />
        </TouchableOpacity>
        <View style={styles.viewImageFunction}>
          <Image source={item.postProfile} style={styles.imageFunction} />
        </View>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  iconVolume:{color:'white',position:'absolute',backgroundColor:'rgba(52,52,52,0.6)',borderRadius:100,}
  ,viewImage:{width:32,height:32,borderRadius:100,backgroundColor:'white',margin:10},
  image:{width:'100%',height:'100%', resizeMode:'cover',borderRadius:100},
  viewFunction:{position:'absolute',bottom:80,right:0,alignItems:'center',flexDirection:'column'},
  viewImageFunction:{width:30,height:30,borderRadius:10,borderWidth:2,borderColor:'white',margin:10},
  imageFunction:{width:'100%',height:'100%',borderRadius:10,resizeMode:'cover'}
})

export default SingleReel
