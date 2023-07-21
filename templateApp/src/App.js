import { View, Text } from "react-native";
import React from "react";
import Routes from "./navigate/Routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends React.Component {
  
  componenDidMount = async () => {
    AsyncStorage.setItem('application_name',JSON.stringify(['a','b','c','d']));
    const application_name = await AsyncStorage.getItem('application_name')
  }

  render() {
    return <Routes />;
  }
}
