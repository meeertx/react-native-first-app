import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Write = ({ navigation }) => {

  const [email,setEmail] = useState('');

  const send = () => {
    if ( email=='asd@gmail.com') {
      alert("Your message is sent");
    } 
    else {
      alert("You are not a register this app!")
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#64CCC5", flex: 1,width:'100%',height:'100%' }}>
      <ScrollView style={{flex:1,width:'100%',height:'100%'}}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Write us</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Icon
              name="chevron-left"
              size={24}
              style={{ position: "absolute", bottom: 11, left: 10 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <TextInput
           
            placeholder="First name"
            style={[styles.input, { marginLeft: 5 }]}
          />
          <TextInput placeholder="Last name" style={styles.input} />
        </View>
        <View>
          <TextInput onChangeText={(email) => setEmail(email)} placeholder="Enter E-mail" style={styles.input1} />
        </View>
        <View>
          <TextInput placeholder="Write your message" style={styles.input2} />
        </View>

        <View style={styles.sendContainer}>
          <TouchableOpacity onPress={() => send()} style={styles.send}>
            <Text style={styles.send_text}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Write;

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
  input: {
    width: 200,
    height: 50,
    backgroundColor: "#DAFFFB",
    marginHorizontal: 5,
    marginVertical: 40,
    borderRadius: 15,
    textAlign: "left",
    paddingHorizontal: 10,
  },
  input1: {
    width: 400,
    height: 50,
    backgroundColor: "#DAFFFB",
    marginHorizontal: 8,
    borderRadius: 15,
    textAlign: "left",
    paddingHorizontal: 10,
  },
  input2: {
    width: 400,
    height: 200,
    backgroundColor: "#DAFFFB",
    marginRight: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  sendContainer:{
    marginLeft:280,
    marginTop:10
  },
  send: {
    width: 100,
    height: 60,
    borderWidth: 1,
    backgroundColor: "#001C30",
    borderColor: "#001C30",
    borderRadius: 5,
  },
  send_text: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    top: 20,
  },
});
