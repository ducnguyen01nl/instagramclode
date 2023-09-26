import React from 'react'
import { View,Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'

function Stories() {

    const navigation = useNavigation();
        const storyInfo = [
            {
                id:1,
                name: 'Your Story',
                image: require('../../storage/images/img1.jpg'),
            },
            {
                id:2,
                name: 'Nguyen',
                image: require('../../storage/images/img6.jpg'),
            },
            {
                id:3,
                name: 'John Sam',
                image: require('../../storage/images/img2.jpg'),
            },
            {
                id:4,
                name: 'Your Story',
                image: require('../../storage/images/img3.jpg'),
            },
            {
                id:5,
                name: 'Your Story',
                image: require('../../storage/images/img4.jpg'),
            },
            {
                id:6,
                name: 'Your Story',
                image: require('../../storage/images/img5.jpg'),
            },
        ]
    
        
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical:20}}>
                {
                    storyInfo.map((data,index) => {
                        return(
                            <TouchableOpacity key={index}
                                onPress={() => navigation.push('Status',{
                                    name: data.name,
                                    image: data.image,
                                })}
                            >
                                <View style={{flexDirection:'column',paddingHorizontal:8,position:'relative'}}>
                                    {
                                        data.id == 1 ? (
                                            <View
                                                style={{position:'absolute',bottom:10,right:10,zIndex:1}}
                                            >
                                                <Entypo name="circle-with-plus"
                                                    style={{
                                                        fontSize:20,
                                                        color:"#405de6",
                                                        backgroundColor:'white',
                                                        borderRadius:100,
                                                    }}
                                                />
                                            </View>
                                        ): null
                                    }
                                    <View style={{width:68,height:68,backgroundColor:'orange',borderRadius:100,borderColor:'#c13584',justifyContent:'center',alignItems:'center'}}>
                                        <Image source={data.image} style={{resizeMode:'cover',width:'92%',height:'92%',borderRadius:100,backgroundColor:'white'}} />
                                    </View>
                                    <Text style={{textAlign:'center',fontSize:10,opacity: data.id == 0 ? 1 : 0.5}}>{data.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
  )
}


export default Stories
