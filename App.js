import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import our components
import SignInScreen from "./components/screens/SignInScreen";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import WebViewScreen from "./components/screens/WebViewScreen.js";

//Create our stack
const Stack = createStackNavigator();

//Create our main component
const App = ({ navigation }) => {
  const [screen, setScreen] = useState("LOGIN");

  //Check if a user is logged in
  useEffect(() => {
    SecureStore.getItemAsync("logged_in").then((result) => {
      if (result === "yes") {
        setScreen("WELCOME");
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screen == "LOGIN" ? (
          <Stack.Screen name="SignIn" options={{ headerShown: false }}>
            {(props) => (
              <SignInScreen validated={(status) => setScreen(status)} />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false, title: "Back" }}
          />
        )}
        <Stack.Screen name="WebView" options={{ title: "" }}>
          {(props) => <WebViewScreen showUrl="http://www.google.co.uk" />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
