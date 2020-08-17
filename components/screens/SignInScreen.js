import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import * as SecureStore from 'expo-secure-store';
import { user } from '../../assets/keys';
import * as Device from 'expo-device';

//import images
import Logo from '../../assets/logo.png';
import bg from '../../assets/bg.jpg';
console.log(user.password);

const SignInScreen = ({ validated }) => {
  //Set up state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const os = Device.osName;
  //Helper function for validation
  const validateInput = () => {
    const u = username.toLowerCase();
    const p = password.toLowerCase();

    if (u == user.username && p.toUpperCase() == user.password) {
      //Store the logged in status
      SecureStore.setItemAsync('logged_in', 'yes');
      validated('WELCOME');

      //Set the display to show welcome
    } else {
      u != user.username ? setUsernameError(true) : setUsernameError(false);

      p != user.password ? setPasswordError(true) : setPasswordError(false);
    }
  };

  const changeUserInput = (text) => {
    setUsername(text);
  };

  const changeUserPassword = (text) => {
    setPassword(text);
  };

  return (
    <>
      <StatusBar
        barStyle={os === 'Android' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.title}>
        <Image source={Logo} style={styles.topImg} />
      </View>
      <ImageBackground source={bg} style={styles.bgImg} resizeMode="cover">
        <ScrollView style={styles.scrollView} indicatorStyle="white">
          <View style={styles.messageView}>
            <Text style={styles.messageText}>
              Welcome to our volunteer hub app. We are really grateful that you
              have chosen to volunteer with us to make a difference in the lives
              of young people.
            </Text>
          </View>

          <View style={styles.SignInScreen}>
            <Text style={styles.messageText}>
              Sign in below with the details provided by your line manager
            </Text>
            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder={username.value}
              style={styles.input}
              onChangeText={(text) => changeUserInput(text)}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {usernameError ? (
              <Text style={styles.error}>Username is incorrect</Text>
            ) : null}
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder={password.value}
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(text) => changeUserPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {passwordError ? (
              <Text style={styles.error}>Password is incorrect</Text>
            ) : null}

            <TouchableOpacity onPress={() => validateInput()}>
              <Text style={styles.button}>Log In</Text>
            </TouchableOpacity>
          </View>
          <KeyboardSpacer />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    flex: 0.15,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },

  messageView: {
    flex: 13,
    backgroundColor: '#4b4385',
    color: 'white',
    padding: 7,
    margin: 15,
    borderRadius: 5,
    opacity: 0.95,
    justifyContent: 'center',
  },
  messageText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
  },
  padding: {
    height: 10,
  },
  SignInScreen: {
    height: 350,
    marginTop: 40,
    padding: 20,
    backgroundColor: '#48a1d7',
    opacity: 0.95,
    marginHorizontal: 15,
    marginBottom: 150,
    justifyContent: 'center',
    borderRadius: 5,
  },
  bgImg: {
    flex: 1,
  },
  topImg: {
    height: undefined,
    width: undefined,
    paddingTop: 65,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    color: 'white',
    fontSize: 18,
    padding: 5,
    marginTop: 10,
    fontWeight: '300',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 18,
    padding: 5,
    marginVertical: 5,
    color: 'white',
  },
  button: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    color: '#48a1d7',
  },
  error: {
    color: 'red',
  },
});

export default SignInScreen;
