import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:'#fff'}}>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Notification</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
          <Icon
            name="chevron-left"
            size={24}
            style={{ position: "absolute", bottom: 11, left: 10 }}
          />
        </TouchableOpacity>
      </View>
        <View style={styles.container}>
            <Image
                source={require("../../assets/avatar1.png")}
                style={styles.profile}
            />
            <Text style={styles.profile_text1}>Joel Rowe</Text>
            <Text style={styles.profile_text2}>Bitrow Company</Text>
            <Text style={styles.under_text}>
                Sorry, all the artists in the Interior Design category are busy right
                now. If your task is still relevant - go to the task details page and
                click "Extend task”.
            </Text>
        </View>
        <View style={styles.container2}>
            <Image
                source={require("../../assets/avatar2.png")}
                 style={styles.profile}
            />
            <Text style={styles.profile_text1}>Cole Payne</Text>
            <Text style={styles.profile_text2}>Corporation Kraton</Text>
            <Text style={styles.under_text}>
                We have found a contractor for your task "Cleaning services”. Please
                see the details.
            </Text>
        </View>
        <View style={styles.container2}>
            <Image
                source={require("../../assets/avatar3.png")}
                style={styles.profile}
            />
            <Text style={styles.profile_text1}>Elva Stone</Text>
            <Text style={styles.profile_text2}>Grand Service Company</Text>
            <Text style={styles.under_text}>
                David Coleman is ready to complete your assignment and get started
                soon! View David's profile and carefully review the order details.
                hen confirm the order.
            </Text>
        </View>
        <View style={styles.underbutton}>
            <TouchableOpacity>
                <Text style={styles.underbutton_title}>View all</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  headertitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#525464",
    paddingTop: 12,
  },
  container: {
    width:370,
    height:162,
    margin: 20,
    backgroundColor:'white',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#CFCCCC'
  },
  container2: {
    width:370,
    height:162,
    margin: 20,
    backgroundColor:'white',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#CFCCCC'
  },
  profile: {
    marginLeft: 20,
    width: 50,
    height: 50,
  },
  profile_text1: {
    position: "absolute",
    left: 80,
    top: 10,
    fontSize: 16,
    color: "#525464",
  },
  profile_text2: {
    position: "absolute",
    left: 80,
    top: 30,
    fontSize: 14,
    color: "#838391",
  },
  under_text: {
    width: 309,
    height: 96,
    margin: 20,
  },
  underbutton:{
    backgroundColor:'#20C3AF',
    width:300,
    height:60,
    justifyContent:'center',
    top:50,
    left:55,
    borderRadius:2,
  },
  underbutton_title:{
    fontSize:16,
    fontWeight:'400',
    color:'white',
    textAlign:'center'
  }
});
