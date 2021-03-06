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

//Screen

const AdminScreen = ({ navigation }) => {
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
              Welcome to the admin section. Here you'll find essential forms
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WebView', {
                showUrl: 'http://www.barnbus.org.uk/session-evaluation-form',
              })
            }
          >
            <View style={[styles.messageView, styles.blue]}>
              <Text style={styles.messageText}>Session Evaluation Form</Text>
              <Text style={styles.subtitle}>
                Use this form at the end of your youth work session to evaluate
                your session and record essential notes.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WebView', {
                showUrl: 'http://barnbus.org.uk/team-accident-form',
              })
            }
          >
            <View style={styles.messageView}>
              <Text style={styles.messageText}>Accident Form</Text>
              <Text style={styles.subtitle}>
                Use this form to log any accidents or near misses during a youth
                work session.
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('WebView', {
                showUrl: 'http://barnbus.org.uk/mentor-attendance-form',
              })
            }
          >
            <View style={[styles.messageView, styles.blue]}>
              <Text style={styles.messageText}>
                Mentoring Attendance Record
              </Text>
              <Text style={styles.subtitle}>
                A form enabling mentors to log attendance of mentees for their
                sessions.
              </Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WebView', {
                showUrl: 'http://www.barnbus.org.uk/newsletter-signup',
              })
            }
          >
            <View style={[styles.messageView, styles.blue]}>
              <Text style={styles.messageText}>Newsletter Sign Up</Text>
              <Text style={styles.subtitle}>
                Click here to sign up to our newsletter or get your friends and
                family to sign up
              </Text>
            </View>
          </TouchableOpacity>
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
  bgImg: {
    flex: 1,
  },
});

export default AdminScreen;
