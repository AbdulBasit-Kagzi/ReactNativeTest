import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import shoes from '../assets/images/dummyshoes.png';
import heart from '../assets/images/heart.png';
import {colors} from '../assets/colors/colors';

export default function ListCard() {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Image style={styles.productImage} source={shoes} />
        <Text style={styles.company}>Nike</Text>
        <Text style={styles.shoesName}>
          Air Force 1 Jester XX Black Sonic Yellow ...
        </Text>
        <Text style={styles.price}>$96</Text>
        <Image style={styles.heartImage} source={heart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  company: {
    fontSize: 16,
    color: colors.black,
    paddingBottom: 7,
    paddingVertical: 15,
  },
  shoesName: {
    color: colors.darkGrey,
    fontSize: 13,
    paddingBottom: 7,
  },
  price: {
    color: colors.black,
    fontSize: 14,
    paddingBottom: 15,
  },
  card: {
    backgroundColor: colors.white,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 15,
    position: 'relative',
  },
  heartImage: {
    position: 'absolute',
    left: 125,
    top: 15,
    width: 20,
    height: 16,
  },
  productImage: {
    marginTop: 35,
  },
});
