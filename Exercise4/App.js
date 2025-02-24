import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'



function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Home Page</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Profile Screen</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Setting Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelPosition: 'bellow-icon',
        tabBarShowLabel: true, 
        tabBarActiveTintColor: 'blue',
      }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarIcon: ({color}) => (<Ionicons name='home' size={20} color={color}/>),
          tabBarBadge: 1,
        }}/> 
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
          tabBarIcon: ({color}) => (<Ionicons name='person' size={20} color={color}/>), 
  
        }}/>
        <Tab.Screen name='Setting' component={SettingScreen} options={{
          tabBarIcon: ({color}) => (<Ionicons name='settings' size={20} color={color} />), 
          tabBarBadge: 3,
        }} />
      </Tab.Navigator>
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
