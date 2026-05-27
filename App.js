import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens (ensure these files exist)
import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen';
import OutfitScreen from './screens/OutfitScreen';
import ItemsScreen from './screens/ItemsScreen';
import RateScreen from './screens/RateScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import CreateOutfitScreen from './screens/CreateOutfitScreen';

const Dummy = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Dummy Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 1. This function holds your "Internal" navigation (the 4 tabs)
function MainTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        tabBarActiveTintColor: '#D2B48C',
        headerShown: false // Hides double headers
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Outfits" component={OutfitScreen} />
      <Tab.Screen name="Items" component={ItemsScreen} />
      <Tab.Screen name="Rate" component={RateScreen} />
    </Tab.Navigator>
  );
}

// 2. This is the root navigator that decides: Login or Main App?
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* The first screen in the stack is what the user sees first */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Once logged in, we show the component containing the tabs */}
        <Stack.Screen name="MainTabs" component={MainTabs} />

        {/* You can add more screens here if needed, like an About Us screen */}
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />

        {/* If you have an Item Detail screen, add it here as well */}
        <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />

        {/* Example of adding a Create Outfit screen */}
        <Stack.Screen name="CreateOutfit" component={CreateOutfitScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}