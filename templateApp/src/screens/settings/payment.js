import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Payment = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <ScrollView style={{ flex: 1, height: 800 }}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Payment Cards</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Icon
              name="chevron-left"
              size={24}
              style={{ position: "absolute", bottom: 13, left: 10 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <View style={styles.cardbody}>
            <Image
              style={styles.cardicon}
              source={require("../../../assets/cardicon1.png")}
            />
            <Text style={styles.cardtext1}>**** **** **** 3872</Text>
            <Text style={styles.cardtext2}>12/2020</Text>
            <Image
              style={styles.marka}
              source={require("../../../assets/visaicon.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Detail2")}>
          <View style={styles.cardbody}>
            <Image
              style={styles.cardicon}
              source={require("../../../assets/cardicon2.png")}
            />
            <Text style={styles.cardtext1}>**** **** **** 2873</Text>
            <Text style={styles.cardtext2}>07/2022</Text>
            <Image
              style={styles.marka}
              source={require("../../../assets/visaicon.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Detail3")}>
          <View style={styles.cardbody}>
            <Image
              style={styles.cardicon}
              source={require("../../../assets/cardicon3.png")}
            />
            <Text style={styles.cardtext1}>**** **** **** 3212</Text>
            <Text style={styles.cardtext2}>10/2024</Text>
            <Image
              style={styles.marka1}
              source={require("../../../assets/mastercard.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Detail4")}>
          <View style={styles.cardbody}>
            <Image
              style={styles.cardicon}
              source={require("../../../assets/cardicon4.png")}
            />
            <Text style={styles.cardtext1}>**** **** **** 3412</Text>
            <Text style={styles.cardtext2}>12/2024</Text>
            <Image
              style={styles.marka}
              source={require("../../../assets/visaicon.png")}
            />
          </View>
        </TouchableOpacity>

        <View style={{ flex: 1, height: 800 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
            style={styles.touch}
          >
            <Text style={styles.touchText}>Add new card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

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
  cardbody: {
    width: 315,
    height: 90,
    borderWidth: 1,
    borderColor: "#e2e2e0",
    left: 50,
    marginTop: 20,
  },
  cardicon: {
    width: 65,
    height: 42,
    position: "absolute",
    top: 20,
    left: 10,
  },
  cardtext1: {
    position: "absolute",
    left: 100,
    top: 20,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    color: "#525464",
  },
  cardtext2: {
    position: "absolute",
    left: 100,
    top: 40,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    color: "#838391",
  },
  marka: {
    position: "absolute",
    left: 269,
    top: 36,
    width: 26,
    height: 8,
  },
  marka1: {
    width: 24,
    height: 15,
    position: "absolute",
    left: 269,
    top: 36,
  },
  touch: {
    position: "absolute",
    left: 70,
    top: 50,
    borderWidth: 1,
    borderColor: "#20c3af",
    width: 270,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20c3af",
  },
  touchText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
  },
});
