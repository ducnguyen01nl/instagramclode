import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Profile from './src/components/screens/Profile';
import Activity from './src/components/screens/Activity';
import Ionic from 'react-native-vector-icons/Ionicons'
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile';
import EditProfile from './src/components/screenComponents/EditProfile';
export default function App() {

  const Stack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return(
      <Tabs.Navigator
        screenOptions={({route}) =>(
          {
            tabBarShowLabel: false,
            headerShown:false,
            tabBarStyle:{
              height:50,
            },
            tabBarIcon: ({focused, size,color}) => {
              let iconName;
              if(route.name === "Home"){
                iconName = focused ? "home-sharp" : "home-outline";
                size = focused ? size + 8 : size +2;
              }
              else if(route.name === "Search"){
                iconName = focused ? "search" : "ios-search-outline"
              }
              else if(route.name === "Reels"){
                iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline"
              }
              else if(route.name === "Activity"){
                iconName = focused ? "ios-heart" : "ios-heart-outline"
              }
              else if(route.name === "Profile"){
                iconName = focused ? "ios-person-circle" : "ios-person-outline"
              }

              return <Ionic name={iconName} size={size} color={color} />
            }
          }
        )}
      >
        <Tabs.Screen name='Home' component={Home} />
        <Tabs.Screen name='Search' component={Search} />
        <Tabs.Screen name='Reels' component={Reels} />
        <Tabs.Screen name='Activity' component={Activity} />
        <Tabs.Screen name='Profile' component={Profile} />
      </Tabs.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false, 
        }}
      >
        <Stack.Screen name='BottomTabScreen' component={BottomTabScreen} />
        <Stack.Screen name='Status' component={Status} />
        <Stack.Screen name='FriendProfile' component={FriendProfile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
