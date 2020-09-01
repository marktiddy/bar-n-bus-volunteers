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
import { AntDesign } from '@expo/vector-icons';

import * as Device from 'expo-device';
//Images
import Logo from '../../assets/logo.png';
import bg from '../../assets/bg.jpg';
import jamie from '../../assets/team/jamie.jpg';
import aaron from '../../assets/team/aaron.jpg';
import TeamCard from '../TeamCard';

const TeamScreen = ({ navigation }) => {
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
              Welcome to the team section. Here you will find key contact
              information for our team members
            </Text>
          </View>
          <TeamCard
            image={jamie}
            name="Jamie Sawtell"
            email="ceo@barnbus.org.uk"
            tel="07935 222 113"
            role="CEO"
          />
          <TeamCard
            image={aaron}
            name="Aaron Watts"
            email="aaronwatts@barnbus.org.uk"
            tel="07935 222 112"
            role="Area Youth Development Worker, Castle Point and Rochford"
          />
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
  bgImg: {
    flex: 1,
  },
});

export default TeamScreen;