import React, { useState } from 'react'
import { View,Text, TouchableOpacity, ScrollView,Image, StyleSheet } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {ProfileBody, ProfileButtons} from './ProfileBody'
import { FriendsProfileData } from './Database'

const FriendProfile = ({route,navigation}) => {
    const {name , profileImage,
        follow,
        post,
        followers,
        following} = route.params;
  return (
    <View style={styles.viewContainer}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity 
            onPress={()=>navigation.goBack()}
        >
            <Ionic name='arrow-back' style={{fontSize:20,color:'black'}} />
        </TouchableOpacity>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'92%'
        }}>
            <Text style={{fontSize:15,marginLeft:10,fontWeight:'bold'}}>{name}</Text>
            <Feather name="more-vertical"  style={{fontSize:20,color:'black'}}/>
        </View>

      </View>
      <ProfileBody name={name} profileImage={profileImage} post={post} followers={followers} following={following} />
      <ProfileButtons id={1} />
      <Text style={{
        paddingVertical:10,fontSize:15,fontWeight:'bold'
      }}>Suggested for you</Text>
      <ScrollView
        horizontal={true}
        showHorizontalScrolllIndicator={false}
        style={{paddingTop:10}}
      >
        {
            name === FriendProfile.name ? null :
            FriendsProfileData.map((data,index) =>{
                const [follow,setFollow] = useState(false);
                const [close,setClose] = useState(false)
                return(
                    <View key={index}>
                        {
                            data.name === name || close ? null :
                            (
                                <View style={styles.viewItemFriendProfile}>
                                    <TouchableOpacity style={{position:'absolute',top:10,right:10}}
                                        onPress={() =>setClose(!close)}
                                    >
                                        <AntDesign name='close' style={{fontSize:20,color:'black',opacity:0.5}} />
                                    </TouchableOpacity>
                                    <Image source={data.profileImage} style={{width:80,height:80,borderRadius:100,margin:10}} />
                                    <Text style={{fontWeight:'bold',fontSize:16}}>{data.name}</Text>
                                    <Text style={{fontSize:12}}>{data.accountName}</Text>
                                    <TouchableOpacity style={{width:'80%',paddingVertical:10}}
                                        onPress={()=>{setFollow(!follow)}}
                                    >
                                        <View style={[
                                            {backgroundColor: follow ? null : '#3493D9',
                                            borderWidth: follow ? 1 :0,},
                                            styles.viewTextFollow
                                            ]}>
                                            <Text
                                                style={{color:follow ? 'black' : 'white'}}
                                            >{follow ? 'Following' : 'Follow'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                )
            })
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer:{width:'100%',height:'100%',backgroundColor:'white',padding: 10},  
  viewItemFriendProfile:{width:160,height:200,margin:3,justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#DEDEDE',borderRadius:2,position:'relative'},
  viewTextFollow:{
    width:'100%',
    height:30,
    borderRadius:5,
    borderColor:'#DEDEDE',
    justifyContent:'center',
    alignItems:'center',}
})

export default FriendProfile
