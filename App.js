import { StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShoppingLists from './components/ShoppingLists';

// Create the navigator
const Stack = createNativeStackNavigator();

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCT72Sg9sBsx6nMBRJWvn0kMEuOAo5dOYE",
    authDomain: "shopping-list-demo-5d467.firebaseapp.com",
    projectId: "shopping-list-demo-5d467",
    storageBucket: "shopping-list-demo-5d467.appspot.com",
    messagingSenderId: "707913443109",
    appId: "1:707913443109:web:0dc14e6ead161a834fdccc",
    measurementId: "G-L7SZN62773"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app); 


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShoppingLists"
      >
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
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
