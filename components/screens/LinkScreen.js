import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Device from 'expo-device';
//Images
import Logo from '../../assets/logo.png';
import bg from '../../assets/bg.jpg';

const LinkScreen = ({ navigation }) => {
  const os = Device.osName;
  return (
    <>
      <StatusBar
        barStyle={`${os === 'Android' ? 'light-content' : 'dark-content'}`}
      />
      <View style={styles.title}>
        <Image source={Logo} style={styles.topImg} />
      </View>
      <ImageBackground source={bg} style={styles.bgImg} resizeMode="cover">
        <ScrollView style={styles.scrollView} indicatorStyle="white">
          <View style={styles.messageView}>
            <Text style={styles.messageText}>
              Welcome to our links area. Here are a selection of links for
              useful organisations.
            </Text>
          </View>

          <View style={[styles.messageView, styles.blue]}>
            <Text style={styles.messageText}>Brook</Text>
            <Text style={styles.subtitle}>
              Offering sexual health and well being advice and information
            </Text>
            <View style={styles.spacer} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WebView', {
                  showUrl: 'http://www.brook.org.uk',
                })
              }
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Visit their Website</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.messageView}>
            <Text style={styles.messageText}>FRANK</Text>
            <Text style={styles.subtitle}>
              Young people's drugs and alcohol information and advice.
            </Text>
            <View style={styles.spacer} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WebView', {
                  showUrl: 'https://www.talktofrank.com',
                })
              }
            >
              <View style={styles.button}>
                <Text style={[styles.buttonText, styles.purpleText]}>
                  Visit their Website
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.messageView, styles.blue]}>
            <Text style={styles.messageText}>Mind</Text>
            <Text style={styles.subtitle}>
              Mental health information and support{' '}
            </Text>
            <View style={styles.spacer} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WebView', {
                  showUrl: 'https://www.mind.org.uk',
                })
              }
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Visit their Website</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.messageView}>
            <Text style={styles.messageText}>YouthScape</Text>
            <Text style={styles.subtitle}>
              National youth work organisation offering resources and articles.
            </Text>
            <View style={styles.spacer} />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WebView', {
                  showUrl: 'https://www.youthscape.co.uk',
                })
              }
            >
              <View style={styles.button}>
                <Text style={[styles.buttonText, styles.purpleText]}>
                  Visit their Website
                </Text>
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
  topImg: {
    height: undefined,
    width: undefined,
    paddingTop: 65,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  messageView: {
    backgroundColor: '#4b4385',
    color: 'white',
    padding: 7,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 20,
    opacity: 0.95,
    justifyContent: 'center',
  },
  messageText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '300',
    paddingTop: 5,
    fontStyle: 'italic',
  },
  blue: {
    backgroundColor: '#48a1d7',
  },
  purpleText: {
    color: '#4b4385',
  },
  bgImg: {
    flex: 1,
  },
  grid: {
    marginTop: 10,
    marginBottom: -20,
  },

  spacer: {
    margin: 5,
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    color: '#48a1d7',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default LinkScreen;
