import React, { useState } from 'react'
import { View,Text, ScrollView, TouchableOpacity,Image,StyleSheet } from 'react-native'
import { FriendsProfileData } from '../screenComponents/Database'
import  AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

function Activity() {
  const navigation = useNavigation();
  return (
    <View style={styles.containerActivity}>
        <Text style={styles.title}>Activity</Text>
        <ScrollView style={{margin:10}} showsVerticalScrollIndicator={false}>
          <Text style={{fontWeight:'bold'}}>This week</Text>
          <View style={{flexDirection:'row', paddingVertical:10}}>
            {
              FriendsProfileData.slice(0,3).map((data,index) =>{
                
                return(
                  <TouchableOpacity key={index}
                    onPress={() =>navigation.push("FriendProfile",{
                      name:data.name,
                      profileImage:data.profileImage,
                      follow:data.follow,
                      post:data.posts,
                      followers:data.followers,
                      following:data.following
                    })}
                  >
                    <Text style={{}}>{data.name}, </Text>
                  </TouchableOpacity>
                );
              })
            }
            <Text>Started follwing you</Text>
          </View>
          <Text style={{fontWeight:'bold'}}>
            Earlier
          </Text>
          {
            FriendsProfileData.slice(3,6).map((data,index) =>{
              const [follow,setFollow] = useState(false);
              return(
                <View key={index} style={{width:'100%'}}>
                  <View style={styles.viewFriendProfile}>
                    <TouchableOpacity 
                      onPress={() =>navigation.push("FriendProfile",{
                        name:data.name,
                        profileImage:data.profileImage,
                        follow:data.follow,
                        post:data.posts,
                        followers:data.followers,
                        following:data.following
                      })}
                      style={styles.touchImage}>
                      <Image source={data.profileImage}  style={styles.imageFriend}/>
                      <Text style={{fontSize:15}}>
                        <Text style={{fontWeight:'bold'}}>{data.name}</Text>
                        , who you might know, is on instagram
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:follow ? 72 : 68}}
                      onPress={() => setFollow(!follow)}
                    >
                      <View style={[styles.textFollow,{backgroundColor:follow ? 'white' : '#3493D9',borderWidth:follow ? 1:0,borderColor:follow ? '#DEDEDE':null}]}>
                        <Text style={{color:follow ? 'black': 'white'}}>{follow ? "Following" : "Follow"}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }

          <Text style={{fontWeight:'bold',paddingVertical:10}}>Suggestions for you</Text>
          {
            FriendsProfileData.slice(6,12).map((data,index) =>{
              const [follow,setFollow] = useState(data.follow);
              const [close,setClose] = useState(false);
              return <View key={index}>
                {
                  close ? null : (
                  <View style={{paddingVertical:10,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <View>
                      <TouchableOpacity
                          onPress={() =>navigation.push("FriendProfile",{
                            name:data.name,
                            profileImage:data.profileImage,
                            follow:data.follow,
                            post:data.posts,
                            followers:data.followers,
                            following:data.following
                          })}
                          style={{flexDirection:'row',alignItems:'center',maxWidth:'64%'}}>
                        <Image source={data.profileImage}  style={{width:45,height:45,borderRadius:100,margin:10}}/>
                        <View style={{width:'100%'}}>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>{data.name}</Text>
                        <Text style={{fontSize:12,opacity:0.5}}>{data.accountName}</Text>
                        <Text style={{fontSize:12,opacity:0.5}}>Suggested for you</Text>
                          
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      {follow ? (
                        <TouchableOpacity style={{width: follow ? 90 : 68}}
                          onPress={() =>setFollow(!follow)}
                        >
                          <View style={[styles.styleFollow,{backgroundColor:follow ? null : '#3493D9', borderWidth:follow ? 1 : 0,}]}>
                            <Text style={{color:follow ? 'black' : 'white'}}>{follow ? 'following' : 'follow'}</Text>

                          </View>
                          
                        </TouchableOpacity>
                      ) : (
                        <>
                          <TouchableOpacity style={{width: follow ? 90 : 68}}
                            onPress={() =>setFollow(!follow)}
                          >
                            <View style={[styles.styleFollow,{backgroundColor:follow ? null : '#3493D9', borderWidth:follow ? 1 : 0,}]}>
                              <Text style={{color:follow ? 'black' : 'white'}}>{follow ? 'following' : 'follow'}</Text>

                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{paddingHorizontal:10}}
                            onPress={() =>setClose(!close)}
                          >
                            <AntDesign name='close' style={{fontSize:14,color:'black',opacity:0.8}} />
                          </TouchableOpacity>
                        </>
                      )}

                    </View>

                  </View>
                  )
                }
              </View>
              
            })
          }
          <View style={{padding:20}}>
            <Text style={{color:'#3493D9'}}>See all suggetions</Text>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerActivity:{width:'100%',height:'100%',backgroundColor:'white'},
  title:{fontSize:20,fontWeight:'bold',borderBottomWidth:0.5,borderBottomColor:'#DEDEDE',padding:10},
  viewFriendProfile:{flexDirection:'row',justifyContent:"space-between",alignItems:'center',paddingVertical:20,width:'100%'},
  touchImage:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',maxWidth:'64%'},
  imageFriend:{ width:45,height:45,borderRadius:100,margin:10},
  textFollow:{width:'100%',height:30,borderRadius:5,justifyContent:'center',alignItems:'center'},
  styleFollow:{width:'100%',height:30,borderRadius:5, borderColor:'#DEDEDE',justifyContent:'center',alignItems:'center'},

})

export default Activity
