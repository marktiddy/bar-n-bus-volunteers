import React from "react";
import { Linking } from "expo";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { Col, Grid } from "react-native-easy-grid";

//Images
import Logo from "../../assets/logo.png";
import bg from "../../assets/bg.jpg";

const SafeguardingScreen = ({ navigation }) => {
  //function to open links
  const openLink = (link, type) => {
    if (type === "email") {
      const url = `mailto:${link}`;
      Linking.openURL(url);
    } else if (type === "tel") {
      const url = `tel:${link}`;
      Linking.openURL(url);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.title}>
        <Image source={Logo} style={styles.topImg} />
      </View>
      <ImageBackground source={bg} style={styles.bgImg} resizeMode="cover">
        <ScrollView style={styles.scrollView} indicatorStyle="white">
          <View style={styles.messageView}>
            <Text style={styles.messageText}>
              Welcome to the safeguarding section. Here you'll find our policies
              and procedures and ways to log a concern/contact our safeguarding
              lead.
            </Text>
          </View>
          <Grid style={styles.grid}>
            <Col style={styles.col}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("WebView", {
                    showUrl:
                      "http://www.barnbus.org.uk/safeguarding-policy-doc",
                  })
                }
              >
                <Text style={styles.messageText}>Safeguarding Policy</Text>
                <Text style={styles.subtitle}>
                  Read our full safeguarding policy.
                </Text>
              </TouchableOpacity>
            </Col>
            <Col style={[styles.col, styles.blue]}>
              <Text style={styles.messageText}>
                Safeguarding Procedure Summary
              </Text>
              <Text style={styles.subtitle}>Coming soon.</Text>
            </Col>
          </Grid>
          <View style={[styles.messageView, styles.blue]}>
            <Text style={styles.messageText}>Concern Form (coming soon)</Text>
          </View>
          <View style={styles.messageView}>
            <Text style={styles.messageText}>
              Safeguarding Lead - Jamie Sawtell (CEO)
            </Text>
            <View style={styles.spacer} />
            <TouchableOpacity onPress={() => openLink("+447935222113", "tel")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Call: 07935 222 113</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLink("ceo@barnbus.org.uk", "email")}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Email: ceo@barnbus.org.uk</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.subtitle}>
              If Jamie is unavailable call the Children and Families Hub
            </Text>
            <TouchableOpacity onPress={() => openLink("+443456037627", "tel")}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tel: 0345 603 7627</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 0.8,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    flex: 0.15,
    width: "100%",
    alignContent: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  topImg: {
    height: undefined,
    width: undefined,
    paddingTop: 65,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  messageView: {
    backgroundColor: "#4b4385",
    color: "white",
    padding: 7,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 20,
    opacity: 0.95,
    justifyContent: "center",
  },
  messageText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "300",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "300",
    paddingTop: 5,
    fontStyle: "italic",
  },
  blue: {
    backgroundColor: "#48a1d7",
  },
  bgImg: {
    flex: 1,
  },
  grid: {
    marginTop: 10,
    marginBottom: -20,
  },
  col: {
    backgroundColor: "#4b4385",
    color: "white",
    marginHorizontal: 15,
    borderRadius: 5,
    padding: 5,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
    height: 150,
  },
  spacer: {
    margin: 5,
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonText: {
    color: "#4b4385",
    textAlign: "center",
    fontWeight: "500",
  },
});

export default SafeguardingScreen;
