import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import * as Linking from "expo-linking";

const TeamCard = ({ image, name, email, role, tel, navigation }) => {
  //function to open links
  const openLink = (link, type) => {
    if (type === "email") {
      const url = `mailto:${link}`;
      Linking.openURL(url);
    } else if (type === "tel") {
      const url = `tel:${link.replace(/\s/g, "")}`;
      Linking.openURL(url);
    }
  };

  return (
    <View style={[styles.teamMember, styles.blue]}>
      <View style={styles.teamMemberItem}>
        <Image source={image} style={styles.image} />
        {name == "Kim Radford" ? (
          <Text style={styles.note}>(Note: This is Kim's personal number)</Text>
        ) : null}
      </View>
      <View style={styles.teamMemberItemDetails}>
        <Text style={styles.subtitle}>{name}</Text>
        <Text style={styles.messageText}>{role}</Text>
        <TouchableOpacity onPress={() => openLink(tel, "tel")}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, styles.blueText]}>
              Call: {tel}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink(email, "email")}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, styles.blueText]}>
              Email: {email}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  teamMember: {
    backgroundColor: "#4b4385",
    flex: 0.5,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
    borderRadius: 5,
    padding: 10,
    alignItems: "flex-start",
    alignContent: "center",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
  teamMemberItem: {
    width: "50%",
  },
  teamMemberItemDetails: {
    width: "50%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    borderRadius: 100,
    margin: 5,
    borderWidth: 2,
    borderColor: "white",
    width: 150,
    height: 150,
  },
  blueText: {
    color: "#48a1d7",
  },
  messageText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "300",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    textAlign: "right",
    fontWeight: "500",
  },
  blue: {
    backgroundColor: "#48a1d7",
  },
  note: {
    color: "white",
    textAlign: "center",
  },
});

export default TeamCard;
