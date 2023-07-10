import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors/colors';
import price from '../assets/images/price.png';
import filter from '../assets/images/filter.png';
import ListCard from '../component/ListCard';

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Sneakers</Text>
        <View style={styles.filter_priceContainer}>
          <Image source={price} />
          <Image source={filter} />
        </View>
      </View>
      <View>
        <Text style={styles.subText}>25 products found</Text>
      </View>
      <View>
        <ListCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontWeight: '800',
    fontSize: 30,
  },
  filter_priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    paddingTop: 10,
    fontSize: 16,
    color: colors.black,
  },
});
