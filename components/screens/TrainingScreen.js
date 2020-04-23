import React, { useEffect, useState } from "react";
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

import { eventbriteKey } from "../../assets/keys";

import EventItem from "../EventItem";

//Images
import Logo from "../../assets/logo.png";
import bg from "../../assets/bg.jpg";

const TrainingScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //Try our api call again

    fetch("https://www.eventbriteapi.com/v3/users/me/events/", {
      method: "GET",
      headers: { Authorization: `Bearer ${eventbriteKey}` },
    })
      .then((response) => response.json())
      .then((json) => {
        setEvents(json.events);
      });
  }, []);

  //Nav function
  const navFunction = (url) => {
    navigation.navigate("WebView", {
      showUrl: url,
    });
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
              Welcome to our training section. View and book into our upcoming
              training from here.
            </Text>
          </View>
          {events
            ? events.map((m) => (
                <EventItem event={m} key={m.id} pressFunc={navFunction} />
              ))
            : null}
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
  messageText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "300",
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

  bgImg: {
    flex: 1,
  },
});

export default TrainingScreen;
