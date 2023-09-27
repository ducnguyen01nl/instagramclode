import React from 'react'
import { TouchableOpacity, View,Text, ToastAndroid,Image,TextInput, StyleSheet } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

const EditProfile = ({route,navigation}) => {
    const {name,accountName,profileImage} = route.params;

    const ToastMessage = () =>{
        ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT)
    }

  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'white'}} >
      <View style={styles.viewTop}>
        <TouchableOpacity
            onPress={() =>navigation.goBack()}
        >
            <Ionic name='close-outline' style={{fontSize:35}} />
        </TouchableOpacity>
        <Text style={{fontSize:16,fontWeight:'bold'}}>Edit Profile</Text>
        <TouchableOpacity
            onPress={() =>{
                ToastMessage();
                navigation.goBack()
            }}
        >
            <Ionic name='checkmark' style={{fontSize:35,color:'#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding:20,alignItems:'center'}}>
        <Image source={profileImage} style={{width:80,height:80,borderRadius:100}} />
        <Text style={{color:'#3493D9'}}>Change profile photo</Text>
      </View>
      <View style={{padding:10}}>
        <View style={{paddingVertical:10}}>
            <Text style={{opacity:0.5}}>Name</Text>
            <TextInput placeholder="name" defaultValue={name} style={styles.itemEditProfile} />
        </View>
        <View style={{paddingVertical:10}}>
            <Text style={{opacity:0.5}}>UserName</Text>
            <TextInput placeholder="accountName" defaultValue={accountName} style={styles.itemEditProfile} />
        </View>
        <View style={{paddingVertical:10}}>
            <Text style={{opacity:0.5}}></Text>
            <TextInput placeholder="Website"  style={styles.itemEditProfile} />
        </View>
        <View style={{paddingVertical:10}}>
            <Text style={{opacity:0.5}}></Text>
            <TextInput placeholder="Bio"  style={styles.itemEditProfile} />
        </View>
      </View>

        <View>
        <Text style={styles.itemEdit}>Switch to Professional account</Text>
            <Text style={styles.itemEdit}>Persnol infomation setting</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  viewTop:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10},
  itemEditProfile:{fontSize:16,borderBottomWidth:1,borderColor:'#CDCDCD'},
  itemEdit:{marginVertical:10,padding:10,color:'#3493D9',borderTopWidth:1,borderBottomWidth:1,borderColor:'#EFEFEF'},
})

export default EditProfile
