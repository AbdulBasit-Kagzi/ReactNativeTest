import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import hamburger from '../assets/images/hamburger.png';
import {colors} from '../assets/colors/colors';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSubContainer}>
        <Image source={hamburger} />
        <TextInput
          style={styles.searchField}
          placeholder="Search Product"
          placeholderTextColor={colors.grey}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  searchField: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 288,
    textAlign: 'center',
  },
});
