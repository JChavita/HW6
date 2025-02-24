import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

function HomeScreen({ navigation, route }){
  return(
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Text>{route.params?.msgDetail}</Text>
      <Button title="Go to Detail Page" onPress={() => navigation.navigate("Details", {
        message:"Hello from Home Page",
        name:"Jose",
      })}/>
    </View>
  )
  
}

function DetailScreen( { navigation, route} ){
    const { name } = route.params;
  return(
    <View style={styles.container}>
      <Text>Details Page </Text>
      <Text>{route.params?.message}</Text>
      <Text>My name is {name}</Text>
      <Button title='Send Data Back' onPress={() => navigation.navigate('Home', {
        msgDetail: 'Hello from Detail Page'
      })}/>
    </View>
  )
  
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/> 
        <Stack.Screen name='Details' component={DetailScreen}/>
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
