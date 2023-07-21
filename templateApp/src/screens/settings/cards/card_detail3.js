import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Formik } from "formik";
import * as Yup from "yup";

const Detail3 = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const save = () => {
    if (
      cardNumber == "1234 4567 7890 3212" &&
      month == "10" &&
      year == "2024" &&
      cvv == "337"
    ) {
      alert("Card saved");
    } else if (cardNumber != "1234 4567 7890 3212") {
      alert("Card number mising");
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Payment Cards</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
            <Icon
              name="chevron-left"
              size={24}
              style={{ position: "absolute", bottom: 11, left: 10 }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            style={styles.card}
            source={require("../../../../assets/cardicon3.png")}
          />
        </View>

        <View>
          <Text style={styles.text}>Card Number</Text>
          <TextInput
            onChangeText={(cardNumber) => {
              setCardNumber(cardNumber);
            }}
            style={styles.input}
            placeholder="**** **** **** 3212"
          />
        </View>

        <View>
          <Text style={styles.textM}>Exp.Month</Text>
          <TextInput
            onChangeText={(month) => {
              setMonth(month);
            }}
            style={styles.input1}
            placeholder="10"
          />
          <TouchableOpacity>
            <Icon name="chevron-down" style={styles.icon1} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textY}>Exp.Year</Text>
          <TextInput
            onChangeText={(year) => {
              setYear(year);
            }}
            style={styles.input2}
            placeholder="2024"
          />
          <TouchableOpacity>
            <Icon name="chevron-down" style={styles.icon2} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textcvv}>CVV</Text>
          <TextInput
            onChangeText={(cvv) => {
              setCvv(cvv);
            }}
            style={styles.input3}
            placeholder="***"
          />
          <TouchableOpacity>
            <Icon name="eye-off" style={styles.icon3} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => save()} style={styles.touch}>
            <Text style={styles.touch_text}>Save card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail3;

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
  body: {},
  card: {
    position: "absolute",
    top: 30,
    left: 50,
    width: 314,
    height: 201,
  },
  text: {
    position: "absolute",
    top: 270,
    left: 50,
    color: "#525464",
    fontSize: 20,
    fontWeight: "400",
  },
  input: {
    position: "absolute",
    top: 300,
    left: 50,
    backgroundColor: "#F7F7F7",
    padding: 10,
    width: 315,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#F7F7F7",
  },
  textM: {
    position: "absolute",
    top: 400,
    left: 50,
    color: "#525464",
    fontSize: 20,
    fontWeight: "400",
  },
  input1: {
    position: "absolute",
    top: 435,
    left: 50,
    backgroundColor: "#F7F7F7",
    padding: 10,
    width: 100,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#F7F7F7",
  },
  icon1: {
    position: "absolute",
    top: 450,
    left: 120,
    fontSize: 18,
  },
  textY: {
    position: "absolute",
    top: 400,
    left: 170,
    color: "#525464",
    fontSize: 20,
    fontWeight: "400",
  },
  input2: {
    position: "absolute",
    top: 435,
    left: 170,
    backgroundColor: "#F7F7F7",
    padding: 10,
    width: 100,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#F7F7F7",
  },
  icon2: {
    position: "absolute",
    top: 450,
    left: 240,
    fontSize: 18,
  },
  textcvv: {
    position: "absolute",
    top: 400,
    left: 280,
    color: "#525464",
    fontSize: 20,
    fontWeight: "400",
  },
  input3: {
    position: "absolute",
    top: 435,
    left: 280,
    backgroundColor: "#F7F7F7",
    padding: 10,
    width: 100,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#F7F7F7",
  },
  icon3: {
    position: "absolute",
    top: 448,
    left: 350,
    fontSize: 18,
    color: "#b0b0c3",
  },
  touch: {
    position: "absolute",
    top: 650,
    left: 50,
    borderWidth: 1,
    borderColor: "#20c3af",
    backgroundColor: "#20c3af",
    width: 315,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  touch_text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  alert: {
    color: "red",
    fontSize: 14,
    top: 360,
    left: 70,
  },
});
