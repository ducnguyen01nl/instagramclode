import React, { useState } from 'react'
import { View,Text,Image, TouchableOpacity, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

export const ProfileBody = ({name,accountName,profileImage,post,followers,following}) => {
  return (
    <View>
      {accountName ? 
      <View style={styles.viewTopProfile}>
        <View style={{ flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{accountName}</Text>
            <Feather name='chevron-down' 
                style={{fontSize:20,color:'black',paddingHorizontal:5,opacity:0.5}} />
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Feather name='plus-square' style={{fontSize:25,color:'black',paddingHorizontal:15}} />
            <Feather name='menu' style={{fontSize:25}} />
        </View>
      </View> : null }
        {/* ( */}
            <View style={styles.viewInfo}>
                <View style={{
                    alignItems:'center'
                }}>
                    <Image source={profileImage} 
                        style={{resizeMode:'cover',width:80,height:80,borderRadius:100}} />
                    <Text style={{paddingVertical:5,fontWeight:'bold'}}>{name}</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>{post}</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>{following}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>{following}</Text>
                    <Text>Following</Text>
                </View>
            </View>
        {/* ) */}
      
    </View>
  )
}

export const ProfileButtons = ({id,name,accountName,profileImage}) =>{
    const [follow,setFollow] = useState(false);
    const navigation = useNavigation();
    return(
        <>
            {
                id === 0 ? (
                    <View style={styles.viewProfileButton}>
                        <TouchableOpacity style={{width:'100%',}} 
                            onPress={() =>navigation.push("EditProfile",{name:name,accountName:accountName,profileImage:profileImage})}>
                            <View style={styles.styleButton}>
                                <Text style={{fontWeight:'bold',fontSize:14,letterSpacing:1,opacity:0.8}}>Edit Profile</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                ) : (
                    <View style={styles.viewProfileFriend}>
                        <TouchableOpacity style={{width:'42%'}}
                            onPress={()=>setFollow(!follow)}
                        >
                            <View style={[styles.textFollow,{backgroundColor: follow ? null : '#3493D9',borderWidth: follow ? 1:0,}]}>
                                <Text style={{color:follow ? 'black': 'white'}}>{follow ? 'Following' :'Follow'}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.textMessage}>
                            <Text>Message</Text>
                        </View>
                        <View style={styles.icon}>
                            <Feather name='chevron-down' style={{fontSize:20,color:'black'}} />
                        </View>
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    viewTopProfile:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
    viewInfo:{flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingVertical:20},
    viewProfileButton:{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',paddingVertical:5},
    styleButton:{width:'100%',height:35,borderRadius:5,borderColor:'#DEDEDE',borderWidth:1,justifyContent:'center',alignItems:'center'},
    viewProfileFriend:{width:'100%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'},
    textFollow:{width:'100%',height:35,borderRadius:35,borderRadius:5,borderColor:'#DEDEDE',justifyContent:'center',alignItems:'center'},
    textMessage:{width:'42%',height:35,borderWidth:1,borderColor:'#DEDEDE',justifyContent:'center',alignItems:'center',borderRadius:5},
    icon:{width:'10%',height:35,borderWidth:1,borderColor:'#DEDEDE',justifyContent:'center',alignItems:'center',borderRadius:5}
})