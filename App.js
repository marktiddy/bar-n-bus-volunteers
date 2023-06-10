import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Sentry from "sentry-expo";

//Import our components
import SignInScreen from "./components/screens/SignInScreen";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import WebViewScreen from "./components/screens/WebViewScreen.js";
import AdminScreen from "./components/screens/AdminScreen";
import SafeguardingScreen from "./components/screens/SafeguardingScreen";
import TrainingScreen from "./components/screens/TrainingScreen";
import LinkScreen from "./components/screens/LinkScreen";
import TeamScreen from "./components/screens/TeamScreen";

Sentry.init({
  dsn: "https://f75e45fb33174107b175222e46b1d26a@o407062.ingest.sentry.io/4505334164488192",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

//Create our stack
const Stack = createStackNavigator();

//Create our main component
const App = () => {
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

export default App;
