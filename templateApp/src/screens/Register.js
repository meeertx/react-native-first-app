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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirm,setConfirm] = useState('');



  const checkUser = () => {
    if(email=='asd@gmail.com' && password=='123' && password===confirm) {
      alert('REGISTRATION SUCCESSFUL');
    }
    else{
      alert('REGISTRATION FAİLED');
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-left" size={15} style={{position:'absolute' ,top:50,left:15}}/>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Register </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Category")}>
            <Icon
              name="arrow-right"
             size={15}
             style={{ position: "absolute", top:-8, right: 15 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.logo_area}>
          <Image
            style={{width:138,height:141}}
            resizeMethod={"scale"}
            source={require("../../assets/logo2.png")}
          />
        </View>

        <View style={styles.board}>
          <View style={[styles.item, { marginTop: 50 }]}>
            <TextInput placeholder="Enter email" style={styles.input} 
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.item}>
            <TextInput secureTextEntry placeholder="Enter password" style={styles.input}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity style={{position:'absolute',right:10,top:15}}>
              <Icon name={'eye-slash'} size={15} color={'#B0B0C3'}/>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TextInput secureTextEntry placeholder="Confirm password" style={styles.input} 
              onChangeText={(confirm) => setConfirm(confirm)}
            />
            <TouchableOpacity style={{position:'absolute',right:10,top:15}}>
              <Icon name={'eye-slash'} size={15} color={'#B0B0C3'}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.item, { marginTop: 25 }]}>
            <TouchableOpacity style={styles.button}
              
              onPress={() => checkUser()}
            >
              <Text style={styles.button_title}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.item,{ justifyContent: "center", alignItems: "center",marginBottom:10 },]}>
            <Text style={{ color: "#838391",fontWeight:'400' }}> or </Text>
          </View>
          <View style={styles.social}>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/campaign/landing.php?campaign_id=1655235780&extra_1=s%7Cc%7C358240686616%7Ce%7Cfacebook%20register%7C&placement=&creative=358240686616&keyword=facebook%20register&partner_id=googlesem&extra_2=campaignid%3D1655235780%26adgroupid%3D62307621303%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-299018535828%26loc_physical_ms%3D1012782%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwk96lBhDHARIsAEKO4xYsVqRhhU9eU0ZauUAgjW_riIDxZ9wtiiDJR03pT2_KpFA6Hj-F4XwaAggtEALw_wcB')}} style={styles.social_item}>
              <Icon name={'facebook'} style={{color:'#1777F2',fontSize:20}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://twitter.com/i/flow/signup?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF91cmwiOiIvbG9naW4%2FbGFuZz10ciJ9%22%7D')}} style={styles.social_item}>
              <Icon name={'twitter'} style={{color:'#1777F2',fontSize:20}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.linkedin.com/signup?_l=tr')}} style={styles.social_item}>
              <Icon name={'linkedin'} style={{color:'#1777F2',fontSize:20}} />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontWeight:'700',color:'#838391',fontSize:16,marginTop:5}}>Already have an account?  <Text style={{color:'#FFB19D',fontWeight:'700'}}>Sign In</Text></Text>
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
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#525464",
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
});