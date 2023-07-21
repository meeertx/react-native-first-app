import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Interior = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Text style={styles.header_title}>Interior Design</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Category")}>
          <Icon
            name="chevron-left"
            color={"#525464"}
            size={22}
            style={{ position: "absolute", bottom: 9, left: 10 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{}}>
        <View style={{ width: 150, height: 253 }}>
          <Image
            source={require("../../../assets/furniture1.png")}
            style={styles.furniture}
            resizeMethod={"scale"}
          />
          <Text style={styles.furniture1}>Balcony repair</Text>
          <Text style={styles.furniture2}>$24</Text>
        </View>
        <View style={{ width: 150, height: 122 }}>
          <Image
            source={require("../../../assets/furniture2.png")}
            style={styles.redecorating}
            resizeMethod={"scale"}
          />
          <Text style={styles.redecorating1}>Redecorating</Text>
          <Text style={styles.redecorating2}>$60</Text>
        </View>
        <View style={{ width: 150, height: 120 }}>
          <Image
            source={require("../../../assets/furniture3.png")}
            style={styles.painting}
            resizeMethod={"scale"}
          />
          <Text style={styles.painting1}>Painting works</Text>
          <Text style={styles.painting2}>$42</Text>
        </View>
        <View style={{ width: 150, height: 196 }}>
          <Image
            source={require("../../../assets/furniture4.png")}
            style={styles.interior}
            resizeMethod={"scale"}
          />
          <Text style={styles.interior1}>Interior design</Text>
          <Text style={styles.interior2}>$54</Text>
        </View>
        <View style={{ width: 150, height: 122 }}>
          <Image
            source={require("../../../assets/furniture5.png")}
            style={styles.circle}
            resizeMethod={"scale"}
          />
          <Text style={styles.circle1}>Circle works</Text>
          <Text style={styles.circle2}>$60</Text>
        </View>
        <View style={{ width: 150, height: 122 }}>
          <Image
            source={require("../../../assets/furniture6.png")}
            style={styles.floor}
            resizeMethod={"scale"}
          />
          <Text style={styles.floor1}>Floor design</Text>
          <Text style={styles.floor2}>$54</Text>
        </View>
        <TouchableOpacity style={styles.toucharchive}>
          <Text style={styles.touchtextarchive}>Archive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchwork}>
          <Text style={styles.touchtextwork}>In Work</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Interior;

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header_title: {
    fontSize: 20,
    fontWeight: "400",
    color: "#525464",
  },
  furniture: {
    position: "absolute",
    left: 45,
    top: 10,
    borderWidth: 1,
    borderColor: "#f9f4f4",
    backgroundColor: "#f9f4f4",
  },
  furniture1: {
    position: "absolute",
    top: 215,
    left: 70,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#525464",
  },
  furniture2: {
    position: "absolute",
    top: 235,
    left: 110,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    color: "#b0b0c3",
  },
  redecorating: {
    position: "absolute",
    top: -242,
    left: 210,
  },
  redecorating1: {
    position: "absolute",
    top: -112,
    left: 240,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#525464",
  },
  redecorating2: {
    position: "absolute",
    top: -90,
    left: 275,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    color: "#b0b0c3",
  },
  painting: {
    position: "absolute",
    left: 45,
    top: -100,
    borderWidth: 1,
    borderColor: "#f9f4f4",
    backgroundColor: "#f9f4f4",
  },
  painting1: {
    position: "absolute",
    top: 30,
    left: 70,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#525464",
  },
  painting2: {
    position: "absolute",
    top: 50,
    left: 110,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    color: "#b0b0c3",
  },
  interior: {
    position: "absolute",
    top: -297,
    left: 210,
  },
  interior1: {
    position: "absolute",
    top: -90,
    left: 240,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#525464",
  },
  interior2: {
    position: "absolute",
    top: -70,
    left: 275,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    color: "#b0b0c3",
  },
  circle: {
    position: "absolute",
    left: 45,
    top: -230,
    borderWidth: 1,
    borderColor: "#f9f4f4",
    backgroundColor: "#f9f4f4",
  },
  circle1: {
    position: "absolute",
    top: -99,
    left: 77,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#525464",
  },
  circle2: {
    position: "absolute",
    top: -75,
    left: 107,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    color: "#b0b0c3",
  },
  floor: {
    position: "absolute",
    top: -350,
    left: 210,
  },
  floor1: {
    position: "absolute",
    top: -145,
    left: 245,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    color: "#525464",
  },
  floor2: {
    position: "absolute",
    top: -120,
    left: 280,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    color: "#b0b0c3",
  },
  toucharchive: {
    width: 150,
    height: 50,
    borderWidth: 1,
    position: "absolute",
    top: 750,
    left: 45,
    backgroundColor: "#fffffff",
    borderColor: "#e2e2e080",
  },
  touchtextarchive: {
    position: "absolute",
    left: 46,
    top: 14,
    width: 59,
    height: 19,
    fontSize: 16,
    color: "#838391",
    textAlign: "center",
  },
  touchwork: {
    width: 150,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#20c3af",
    borderColor: "#20c3af",
    position: "absolute",
    top: 750,
    right: 45,
  },
  touchtextwork: {
    position: "absolute",
    left: 46,
    top: 14,
    width: 59,
    height: 19,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
