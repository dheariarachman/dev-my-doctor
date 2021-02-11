import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {MDLogo, MDBackground} from '../../assets';
import {MDButton, MDText} from '../../components';

export default function GetStarted() {
  const helloWorld = () => {
    console.log('Oke');
  };

  return (
    <ImageBackground source={MDBackground} style={styles.container}>
      <View>
        <MDLogo />
        <MDText style={styles.textMargin}>
          Konsultasi dengan Dokter jadi lebih mudah &amp; Fleksibel
        </MDText>
      </View>
      <View>
        <MDButton title="Get Started" type="primary" onPress={helloWorld} />
        <MDButton title="Sign In" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    justifyContent: 'space-between',
    flex: 1,
  },
  textMargin: {
    marginTop: 48,
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
  },
});
