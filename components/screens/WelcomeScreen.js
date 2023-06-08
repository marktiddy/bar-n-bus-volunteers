import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Device from "expo-device";
import { Col, Grid } from "react-native-easy-grid";

//Images
import Logo from "../../assets/logo.png";
import bg from "../../assets/bg.jpg";

const WelcomeScreen = ({ navigation }) => {
  const os = Device.osName;
  return (
    <>
      <StatusBar
        barStyle={`${os === "Android" ? "light-content" : "dark-content"}`}
      />
      <View style={styles.title}>
        <Image source={Logo} style={styles.topImg} />
      </View>
      <ImageBackground source={bg} style={styles.bgImg} resizeMode="cover">
        <ScrollView style={styles.scrollView} indicatorStyle="white">
          <View style={styles.messageView}>
            <Text style={styles.messageText}>
              Welcome to our volunteer app. Please choose an option from below
            </Text>
          </View>

          <Grid style={styles.grid}>
            <Col style={styles.col}>
              <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
                <Text style={styles.messageText}>Administration</Text>
                <Text style={styles.subtitle}>
                  Find evaluation forms, accident forms etc.
                </Text>
              </TouchableOpacity>
            </Col>
            <Col style={[styles.col, styles.blue]}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Safeguarding")}
              >
                <Text style={styles.messageText}>Safeguarding</Text>
                <Text style={styles.subtitle}>
                  Important information about our policies and referral
                  procedures
                </Text>
              </TouchableOpacity>
            </Col>
          </Grid>
          <Grid style={styles.grid}>
            <Col style={[styles.col, styles.blue]}>
              <TouchableOpacity onPress={() => navigation.navigate("Team")}>
                <Text style={styles.messageText}>Team Contacts</Text>
                <Text style={styles.subtitle}>
                  Details for contacting the Bar'N'Bus staff
                </Text>
              </TouchableOpacity>
            </Col>

            <Col style={styles.col}>
              <TouchableOpacity onPress={() => navigation.navigate("Links")}>
                <Text style={styles.messageText}>Useful Links</Text>
                <Text style={styles.subtitle}>
                  Areas to develop your thinking
                </Text>
              </TouchableOpacity>
            </Col>
          </Grid>
          <Grid style={styles.grid}>
            <Col style={[styles.col, styles.blue, styles.colSm]}>
              <TouchableOpacity onPress={() => navigation.navigate("Training")}>
                <Text style={styles.messageText}>Upcoming Training</Text>
                <Text style={styles.subtitle}>
                  Find out about our upcoming training sessions and book your
                  place
                </Text>
              </TouchableOpacity>
            </Col>
          </Grid>
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
    flex: 0.2,
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
    margin: 15,
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
  padding: {
    height: 10,
  },
  bgImg: {
    flex: 1,
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
  colSm: {
    height: 100,
  },
  blue: {
    backgroundColor: "#48a1d7",
  },
});

export default WelcomeScreen;
