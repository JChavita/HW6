import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home Screen Drawer
function HomeScreen({ route }) {
  // prop from Stack Navigator
  const message = route.params?.message || "No message received";

  return (
    <View style={styles.container}>
      <Text>This is the Home Page</Text>
      <Text>Message from Stack: {message}</Text>
    </View>
  );
}


// Stack Screens

function ProfileStack({ navigation, route }) {
  // prop from Drawer Navigator
  const userName = route.params?.user || "Guest";

  return (
    <View style={styles.container}>
      <Text>Welcome to the Stack, {userName}</Text>
      <Button
        title="GO TO ACCOUNT INFO"
        onPress={() => navigation.navigate("Account", { message: "Hello from ProfileStack!" })}
      />
    </View>
  );
}

function AccountStack({ route, navigation }) {
  // message from ProfileStack
  const message = route.params?.message || "No message received";

  return (
    <View style={styles.container}>
      <Text>Here is your account information</Text>
      <Text>Message: {message}</Text>
      <Button title="Go to Home with Message" onPress={() => navigation.navigate("Home", { message })} />
    </View>
  );
}


// Stack Navigator

const Stack = createNativeStackNavigator();

function StackScreen({ route }) {

  const user = route.params?.user || "Guest";

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileStack} initialParams={{ user }} />
      <Stack.Screen name="Account" component={AccountStack} />
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Stack" component={StackScreen} initialParams={{ user: "Jose" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
