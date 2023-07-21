import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Category = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories </Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon
            name="chevron-left"
            size={24}
            style={{ position: "absolute", bottom: 11, left: 10 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.head_input}>
          <TextInput
            placeholder="Search by category"
            style={[styles.input, { paddingHorizontal: 60 }]}
          />
          <Icon
            name="magnify"
            size={22}
            color={"#525464"}
            style={styles.search_ico}
          />
        </View>
        <View style={styles.categoryBody}>
          <View style={styles.categoryback}>
            <Image
              style={styles.categoryicon}
              resizeMethod={"scale"}
              source={require("../../assets/categoryicon.png")}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Furniture")}
            style={styles.categoryarrow}
          >
            <Icon name="chevron-right" size={20} color={"#525464"} />
          </TouchableOpacity>
          <Text style={styles.categoryTxt}>Furniture works</Text>
        </View>
        <View style={styles.categoryBody}>
          <View style={styles.categoryback}>
            <Image
              style={styles.categoryicon}
              resizeMethod={"scale"}
              source={require("../../assets/categoryicon2.png")}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cleaning")}
            style={styles.categoryarrow}
          >
            <Icon name="chevron-right" size={20} color={"#525464"} />
          </TouchableOpacity>
          <Text style={styles.categoryTxt}>Cleaning services</Text>
        </View>
        <View style={styles.categoryBody}>
          <View style={styles.categoryback}>
            <Image
              style={styles.categoryicon}
              resizeMethod={"scale"}
              source={require("../../assets/categoryicon3.png")}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Equipment")}
            style={styles.categoryarrow}
          >
            <Icon name="chevron-right" size={20} color={"#525464"} />
          </TouchableOpacity>
          <Text style={styles.categoryTxt}>Equipment repair</Text>
        </View>
        <View style={styles.categoryBody}>
          <View style={styles.categoryback}>
            <Image
              style={styles.categoryicon}
              resizeMethod={"scale"}
              source={require("../../assets/categoryicon4.png")}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Courier")}
            style={styles.categoryarrow}
          >
            <Icon name="chevron-right" size={20} color={"#525464"} />
          </TouchableOpacity>
          <Text style={styles.categoryTxt}>Courier services</Text>
        </View>
        <View style={styles.categoryBody}>
          <View style={styles.categoryback}>
            <Image
              style={styles.categoryicon}
              resizeMethod={"scale"}
              source={require("../../assets/categoryicon5.png")}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Interior")}
            style={styles.categoryarrow}
          >
            <Icon name="chevron-right" size={20} color={"#525464"} />
          </TouchableOpacity>
          <Text style={styles.categoryTxt}>Interior design</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.back}
        >
          <Text style={styles.backtitle}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")}
          style={styles.next}
        >
          <Text style={styles.nexttitle}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "#525464",
    paddingTop: 20,
  },
  categoryTxt: {
    fontSize: 16,
    color: "#838391",
  },
  categoryBody: {
    borderWidth: 1,
    borderColor: "#F7F7F7",
    width: 315,
    height: 80,
    left: 50,
    top: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#F7F7F7",
    padding: 10,
    width: 315,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#B0B0C3",
    left: 50,
  },
  head_input: {
    marginTop: 30,
  },
  search_ico: {
    position: "absolute",
    top: 20,
    left: 70,
    width: 30,
    height: 30,
    paddingLeft: 3,
  },
  categoryback: {
    position: "absolute",
    backgroundColor: "#F7F7F7",
    width: 80,
    height: 80,
    left: 0,
  },
  categoryicon: {
    position: "absolute",
    left: 25,
    top: 25,
  },
  categoryarrow: {
    position: "absolute",
    right: 20,
  },
  back: {
    position: "absolute",
    top: 712,
    left: 50,
    width: 150,
    height: 60,
    borderWidth: 1,
    borderColor: "#E2E2E0",
    backgroundColor: "#fffff",
    alignItems: "center",
    justifyContent: "center",
  },
  backtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#838391",
    textAlign: "center",
  },
  next: {
    position: "absolute",
    top: 712,
    left: 195,
    width: 150,
    height: 60,
    borderWidth: 1,
    borderColor: "#20C3AF",
    backgroundColor: "#20C3AF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  nexttitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffff",
    textAlign: "center",
  },
});
