// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/auth/Home'; // Import your Home screen
import LoginScreen from "./src/auth/Login";
import RegisterScreen from "./src/auth/Register";

import CustomDrawerContent from './src/navigation/CustomDrawerContent'; // Import the custom drawer content

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="slide" // Slide drawer for more natural drag effect
        drawerStyle={{
          backgroundColor: '#fff', // Customize your drawer background
          width: 250, // Set the width of the drawer
        }}
        gestureEnabled={true} // Enable gestures (dragging the sidebar)
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Custom Drawer
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
