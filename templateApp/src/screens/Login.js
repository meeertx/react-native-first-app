import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  handleSubmit = () => {
    if (username == "asd@gmail.com" && password == "123") {
      alert("Başarılı");
    } else if (username != "asd@gmail.com") {
      alert("Email Hatalı");
    } else if (password != "123") {
      alert("Şifre Hatalı");
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon
              name="arrow-left"
              size={15}
              style={{ position: "absolute", top: 58, left: 15 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Sign In </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Icon
              name="arrow-right"
              size={15}
              style={{ position: "absolute", top: 0, right: 15 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.logo_area}>
          <Image
            style={{ width: 80, height: 116 }}
            resizeMethod={"scale"}
            source={require("../../assets/logo.png")}
          />
        </View>

        <View style={styles.board}>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={this.handleSubmit}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Username required"),
              password: Yup.string().required("Password required"),
            })}
           >
            {({ values, handleSubmit, handleChange,errors }) => (
              <View>
                <View style={[styles.item, { marginTop: 50 }]}>
                  <TextInput
                    value={values.username}
                    placeholder="Username"
                    style={styles.input}
                    onChangeText={handleChange("username")}
                    onChange={(username) => setUsername(username)}/>
                  {(errors.username) && <Text style={styles.alert}>{errors.username}</Text>}
                </View>
                <View style={styles.item}>
                  <TextInput
                    value={values.password}
                    secureTextEntry
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={handleChange("password")}
                    onChange={(password) => setPassword(password)} />
    
                  <TouchableOpacity style={{ position: "absolute", right: 10, top: 15 }}>
                    <Icon name={"eye-slash"} size={15} color={"black"} />
                  </TouchableOpacity>

                  {(errors.password) && <Text style={styles.alert}>{errors.password}</Text>}
                </View>
                <View
                  style={[
                    styles.item,
                    { flexDirection: "row", justifyContent: "flex-end" },
                  ]}
                >
                  <Text style={{ color: "#838391", fontSize: 16 }}>
                    Forgot your password?
                  </Text>
                </View>
                <View style={[styles.item, { marginTop: 25 }]}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.button_title}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View
            style={[
              styles.item,
              {
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
              },
            ]}
          >
            <Text style={{ color: "#838391", fontWeight: "400" }}> or </Text>
          </View>
          <View style={styles.social}>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjg5NzUxNjQ1LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D')}}  style={styles.social_item}>
              <Icon
                name={"facebook"}
                style={{ color: "#1777F2", fontSize: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {Linking.openURL('https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Dtr')}} style={styles.social_item}>
              <Icon
                name={"twitter"}
                style={{ color: "#1DA1F2", fontSize: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.linkedin.com/login/tr')}} style={styles.social_item}>
              <Icon
                name={"linkedin"}
                style={{ color: "#0078B5", fontSize: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity
              onPress={()=>navigation.navigate('Register')}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  color: "#838391",
                  fontSize: 16,
                  marginTop: 5,
                }}
              >
                Don’t have an account?{" "}
                <Text style={{ color: "#FFB19D", fontWeight: "700" }}>
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "#525464",
    paddingTop: 12,
  },
  logo_area: {
    alignItems: "center",
    marginTop: 50,
  },
  board: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  item: { marginBottom: 20 },
  input: {
    backgroundColor: "#F7F7F7",
    padding: 10,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#B0B0C3",
  },
  button: {
    backgroundColor: "#20C3AF",
    paddingVertical: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button_title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  social_item: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E2E2E0",
  },
  alert:{
    color:'red',
    fontSize:16
  }
});
