import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import our components
import SignInScreen from "./components/screens/SignInScreen";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import WebViewScreen from "./components/screens/WebViewScreen.js";
import AdminScreen from "./components/screens/AdminScreen";
import SafeguardingScreen from "./components/screens/SafeguardingScreen";
import TrainingScreen from "./components/screens/TrainingScreen";
import LinkScreen from "./components/screens/LinkScreen";
import TeamScreen from "./components/screens/TeamScreen";

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
      <StatusBar barStyle="dark-content" />

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
          {(showUrl) => <WebViewScreen showUrl={showUrl} />}
        </Stack.Screen>
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Safeguarding"
          component={SafeguardingScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Training"
          component={TrainingScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Links"
          component={LinkScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Team"
          component={TeamScreen}
          options={{ title: "" }}
        />
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
