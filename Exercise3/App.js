import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Home Page</Text>
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function YoutubeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is my YouTube Channel, follow me</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#333',
        drawerActiveBackgroundColor: 'lightblue',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Page',
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={size} color={focused ? 'green' : 'blue'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile Page',
          drawerIcon: ({ focused, size }) => (
            <Icon name="user" size={size} color={focused ? 'green' : 'blue'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Youtube"
        component={YoutubeScreen}
        options={{
          title: 'YouTube Page',
          drawerIcon: ({ focused, size }) => (
            <Icon name="youtube" size={size} color={focused ? 'green' : 'blue'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
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
