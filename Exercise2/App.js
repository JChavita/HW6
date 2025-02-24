import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// SCREEN COMPONENTS

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Page Main Stack</Text>
      <Button 
        title="Go to the Other Stack" 
        onPress={() => navigation.navigate("Profile")} 
      />
    </View>
  );
}

function Setting({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Setting Page</Text>
      <Button 
        title="Go to Account Info" 
        onPress={() => navigation.navigate("Account Information")} 
      />
    </View>
  );
}

function AccountInfo() {
  return (
    <View style={styles.container}>
      <Text>Account Info - Final Page</Text>
    </View>
  );
}


// NESTED STACK

const NestedStack = createNativeStackNavigator();

function ProfilePage() {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen name="Account Settings" component={Setting}/>
      <NestedStack.Screen name="Account Information" component={AccountInfo}/>
    </NestedStack.Navigator>
  );
}

// MAIN STACK

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomePage}/>
        <MainStack.Screen name="Profile" component={ProfilePage}/>
      </MainStack.Navigator>
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
