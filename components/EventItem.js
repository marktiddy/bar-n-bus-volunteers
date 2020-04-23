import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const EventItem = ({ event, pressFunc }) => {
  //Check date
  const today = new Date();
  const eventDate = new Date(event.start.local);
  const eventDateEnd = new Date(event.end.local);
  eventDateEnd.toLocaleTimeString();
  const startSplit = eventDate.toLocaleTimeString().toString().length - 2;
  const endSplit = eventDate.toLocaleTimeString().toString().length - 2;

  //String
  const dateString =
    eventDate.toLocaleString().slice(0, -6) +
    eventDate.toLocaleTimeString().slice(startSplit) +
    " - " +
    eventDateEnd.toLocaleTimeString().slice(0, -6) +
    eventDateEnd.toLocaleTimeString().slice(endSplit);

  if (eventDate <= today) {
    return null;
  } else {
    console.log();
    return (
      <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>{event.name.text}</Text>
        <Text style={styles.eventDate}>{dateString}</Text>
        <Text style={styles.eventDescription}>{event.description.text}</Text>
        <TouchableOpacity onPress={() => pressFunc(event.url)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Click for more info and booking
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  eventContainer: {
    backgroundColor: "#48a1d7",
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 5,
    opacity: 0.95,
    borderRadius: 5,
  },

  eventTitle: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 5,
    fontWeight: "600",
  },
  eventDate: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    paddingBottom: 5,
    fontStyle: "italic",
  },
  eventDescription: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonText: {
    color: "#48a1d7",
    textAlign: "center",
    fontWeight: "500",
  },
});

export default EventItem;
