import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.logo_area}>
        <Image
          resizeMethod="scale"
          style={{ width: 183, height: 302 }}
          source={require("../../assets/homelogo.png")}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            marginLeft: 25,
            marginTop: 20,
            fontSize: 16,
            color: "#838391",
            fontWeight: "400",
          }}
        >
          It's easy, just click on the button
        </Text>
      </View>
      <ScrollView style={{ flex: 1, width: "80%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.touch}
        >
          <Text style={styles.touchText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.touch}
        >
          <Text style={styles.touchText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Category")}
          style={styles.touch}
        >
          <Text style={styles.touchText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={styles.touch}
        >
          <Text style={styles.touchText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    marginTop: 30,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20C3AF",
    borderRadius: 5,
  },
  touchs: {
    flex: 1,
    marginTop: 50,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20C3AF",
    borderRadius: 5,
  },
  touchText: {
    color: "white",
    fontSize: 18,
  },
  textContainer: {
    backgroundColor: "#20C3AF",
    width: "95%",
    height: 50,
    marginTop: 150,
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#20C3AF",
    textAlignVertical: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  logo_area: {
    alignItems: "center",
    marginTop: 50,
  },
});
