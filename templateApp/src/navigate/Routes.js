import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
//import navigation packges
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import screens pages
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/home";
import Category from "../screens/category";
import Notification from "../screens/notification";
import Furniture from "../screens/categoryscreen/furniture";
import Cleaning from "../screens/categoryscreen/cleaning";
import Equipment from "../screens/categoryscreen/equipment";
import Interior from "../screens/categoryscreen/interior";
import Courier from "../screens/categoryscreen/courier";
import Settings from "../screens/settings";
import Payment from "../screens/settings/payment";
import Detail from "../screens/settings/cards/card_detail1";
import Detail2 from "../screens/settings/cards/card_detail2";
import Detail3 from "../screens/settings/cards/card_detail3";
import Detail4 from "../screens/settings/cards/card_detail4";
import About from "../screens/settings/about/about";
import Rate from "../screens/settings/rateus/rate";
import Write from "../screens/settings/writeus/writeus";



const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Furniture"
          component={Furniture}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Cleaning"
          component={Cleaning}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Equipment"
          component={Equipment}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Courier"
          component={Courier}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Interior"
          component={Interior}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Detail2"
          component={Detail2}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Detail3"
          component={Detail3}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Detail4"
          component={Detail4}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Rate"
          component={Rate}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Write"
          component={Write}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#20C3AF",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
