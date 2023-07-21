import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ height: 800, flex: 1, backgroundColor: "#f7f7f7" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Settings</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon
              name="chevron-left"
              size={24}
              style={{ position: "absolute", bottom: 13, left: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.touch}>
            <TouchableOpacity onPress={()=> navigation.navigate('Payment')} style={styles.settings_touch}>
              <Icon
                style={styles.icon}
                name="chevron-right"
                size={20}
                color={"#525464"}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Payment cards</Text>
          </View>

          <View style={styles.touch}>
            <TouchableOpacity onPress={()=>navigation.navigate('Write')} style={styles.settings_touch}>
              <Icon
                style={styles.icon}
                name="chevron-right"
                size={20}
                color={"#525464"}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Write to us</Text>
          </View>

          <View style={styles.touch}>
            <TouchableOpacity onPress={()=>navigation.navigate('Rate')} style={styles.settings_touch}>
              <Icon
                style={styles.icon}
                name="chevron-right"
                size={20}
                color={"#525464"}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Rate us on app store</Text>
          </View>

          <View style={styles.touch}>
            <TouchableOpacity onPress={()=>navigation.navigate('About')} style={styles.settings_touch}>
              <Icon
                style={styles.icon}
                name="chevron-right"
                size={20}
                color={"#525464"}
              />
            </TouchableOpacity>
            <Text style={styles.text}>About Us</Text>
          </View>

          <View style={styles.logout}>
            <TouchableOpacity>
              <Text style={styles.logout_text}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  header_title: {
    fontSize: 20,
    fontWeight: "400",
    color: "#525464",
    paddingTop: 20,
  },
  body: {
    height: 812,
    width: 375,
  },
  touch: {
    height: 100,
  },
  settings_touch: {
    borderWidth: 1,
    borderColor: "#b0b0c3",
    width: 315,
    height: 80,
    left: 50,
    top: 16,
    backgroundColor: "#F5F5F5",
  },
  text: {
    position: "absolute",
    top: 45,
    left: 70,
    fontSize: 16,
    fontWeight: "400",
    color: "#838391",
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 25,
  },
  logout: {
    position: "absolute",
    top: 420,
    right: 45,
  },
  logout_text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffb19d",
    textDecorationLine: "underline",
  },
});
