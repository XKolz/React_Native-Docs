import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CourseListScreen from "./screens/CourseList";
import ProfileScreen from "./screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        //   tabBarShowLabel: false,
        headerTitleAlign:"center",
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={25}
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15, }}
          />
        ),
        headerShown: true,
        headerTitle: route.name,
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "purple",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Course List') {
            iconName = 'book';
          }else if (route.name === 'About Stack') {
            iconName = 'logo-buffer';
          }
          // Add more icons for other tabs as needed
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Course List" component={CourseListScreen} />
      <Tab.Screen
       name="Profile"
        component={ProfileScreen}
        options={{
        tabBarLabel: "My Profile",
        tabBarIcon: () => <Ionicons name={"person"} size={20} />,
        tabBarBadge: 3,
        headerShown: true
        }}
       />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="About Stack" component={AboutStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Manually add each DrawerItem for specific navigation */}
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Overview"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Course List"
        onPress={() => props.navigation.navigate('Course List')}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('Settings')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: route.name === "Profile"
        })}
      >
        <Drawer.Screen name="Home" component={MyTabs} options={{ drawerLabel: "Overview" }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerLabel: 'Profile', unmountOnBlur: true }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
