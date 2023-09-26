import React from 'react'
import { View,Text, TextInput, TouchableOpacity,Image } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons";

function SearchContent(props) {



  const searchData = [
    {
      id:0,
      images: [
        require('../../storage/images/img1.jpg'),
        require('../../storage/images/img2.jpg'),
        require('../../storage/images/img3.jpg'),
        require('../../storage/images/img4.jpg'),
        require('../../storage/images/img5.jpg'),
      ]
    },
    {
      id:1,
      images: [
        require('../../storage/images/img7.jpg'),
        require('../../storage/images/img6.jpg'),
        require('../../storage/images/img8.jpg'),
        require('../../storage/images/img9.jpg'),
        require('../../storage/images/img10.jpg'),
        require('../../storage/images/img11.jpg'),
      ]
    },
    {
      id:2,
      images: [
        require('../../storage/images/img7.jpg'),
        require('../../storage/images/img1.jpg'),
        require('../../storage/images/img3.jpg'),
        require('../../storage/images/img5.jpg'),
        require('../../storage/images/img4.jpg'),
        require('../../storage/images/img6.jpg'),
      ]
    },
  ]

  return (
    <View >
        {searchData.map((data,index) => {
          return(
              <>
                {
                  data.id === 0 ? (
                    <View key={index} style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                      {
                        data.images.map((imageData,imgIndex) =>{
                          return(
                            <TouchableOpacity index={imgIndex} style={{paddingBottom:2}}
                              onPress={() =>{
                                props.data(imageData)
                              }}
                              onPressOut={() =>{
                                props.data(null)
                              }}
                            >
                              <Image source={imageData} style={{width:129,height:150}} />
                            </TouchableOpacity>
                          )
                        })
                      }

                    </View>
                  ) : null
                }
                {
                  data.id === 1 ? (
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row',flexWrap:'wrap',width:261}}>
                        {
                          data.images.slice(0,4).map((imageData,imgIndex) => {
                            return(
                              <TouchableOpacity index={imgIndex} style={{paddingBottom:2}}
                                onPress={() =>{
                                  props.data(imageData)
                                }}
                                onPressOut={() =>{
                                  props.data(null)
                                }}
                              >
                                <Image source={imageData} style={{width:129,height:150}} />
                              </TouchableOpacity>
                            )
                          })
                        }
                      </View>
                      <TouchableOpacity index={data.images[5].imgIndex}
                        onPress={() =>{
                          props.data(data.images[5])
                        }}
                        onPressOut={() =>{
                          props.data(null)
                        }}
                      >
                        <Image source={data.images[5]} style={{width:129,height:300 }} />
                      </TouchableOpacity>

                    </View>
                  ) : null
                }
              </>
          )
        })}
    </View>
  )
}

export default SearchContent
