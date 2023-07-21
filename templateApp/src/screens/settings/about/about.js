import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const About = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.header_title}>About us</Text>
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

        <View>
          <Text style={styles.page_text}>Who We Are ?</Text>
          <Text style={styles.page_text1}>
            Who We Are Amazon is guided by four principles: customer obsession
            rather than competitor focus, passion for invention, commitment to
            operational excellence, and long-term thinking. Amazon strives to be
            Earth’s most customer-centric company, Earth’s best employer, and
            Earth’s safest place to work. Customer reviews, 1-Click shopping,
            personalized recommendations, Prime, Fulfillment by Amazon, AWS,
            Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire
            TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios,
            and The Climate Pledge are some of the things pioneered by Amazon.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.footer}>Leadership Principles</Text>
              <Text style={styles.footer_text}>
                Our Leadership Principles are more than inspirational wall
                hangings. The 16 principles guide our discussions and decisions
                every day.
              </Text>
            </View>
            <View>
              <Text style={styles.ourp}>Our position</Text>
              <Text style={styles.ourp_text}>
                While our positions are carefully considered and deeply held,
                there is much room for healthy debate and differing opinions. We
                hope being clear about our positions is helpful.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.footer2}>Public Policy</Text>
              <Text style={styles.footer_text2}>
                We engage with policymakers on a wide range of issues that are
                important to our customers and employees. Learn more about our
                views on current policy issues.
              </Text>
            </View>
            <View>
              <Text style={styles.ourp2}>Awards and Recognition</Text>
              <Text style={styles.ourp_text2}>
                We are honored to be recognized for the work we do on behalf of
                our customers, employees, and communities every day.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

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
  page_text: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 22,
    fontWeight: "700",
    color: "#525464",
  },
  page_text1: {
    textAlign: "left",
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "300",
    lineHeight: 30,
    color: "#525464",
  },
  footer: {
    textAlign: "left",
    left: 10,
    marginVertical: 30,
    fontSize: 14,
    fontWeight: "700",
    color: "orange",
  },
  footer_text: {
    position: "absolute",
    textAlign: "left",
    fontSize: 13,
    left: 10,
    top: 45,
    width: 200,
    height: 500,
    fontWeight: "300",
    lineHeight: 20,
    color: "#525464",
  },
  ourp: {
    textAlign: "left",
    left: 80,
    marginVertical: 25,
    fontSize: 14,
    fontWeight: "700",
    color: "orange",
  },
  ourp_text: {
    position: "absolute",
    textAlign: "left",
    fontSize: 13,
    left: 80,
    top: 45,
    width: 200,
    height: 500,
    fontWeight: "300",
    lineHeight: 20,
    color: "#525464",
  },
  footer2: {
    textAlign: "left",
    left: 10,
    top: 50,
    marginVertical: 30,
    fontSize: 14,
    fontWeight: "700",
    color: "orange",
  },
  footer_text2: {
    position: "absolute",
    textAlign: "left",
    fontSize: 13,
    left: 10,
    top: 100,
    width: 200,
    height: 500,
    fontWeight: "300",
    lineHeight: 20,
    color: "#525464",
  },
  ourp2: {
    textAlign: "left",
    left: 130,
    top: 55,
    marginVertical: 30,
    fontSize: 14,
    fontWeight: "700",
    color: "orange",
  },
  ourp_text2: {
    position: "absolute",
    textAlign: "left",
    fontSize: 13,
    left: 130,
    top: 100,
    marginTop:10,
    width: 200,
    height: 500,
    fontWeight: "300",
    lineHeight: 20,
    color: "#525464",
  },
});
