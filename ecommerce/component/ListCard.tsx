import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import shoes from '../assets/images/dummyshoes.png';
import heart from '../assets/images/heart.png';
import {colors} from '../assets/colors/colors';
import {Product} from '../types/products.types';

interface ListCardProps {
  data: Product;
}

export default function ListCard({data}: ListCardProps) {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Image style={styles.productImage} source={{uri: data.image}} />
        <Text style={styles.company} ellipsizeMode="tail" numberOfLines={2}>
          {data.title}
        </Text>
        <Text style={styles.shoesName} ellipsizeMode="tail" numberOfLines={2}>
          {data.description}
        </Text>
        <Text style={styles.price}>${data.price}</Text>
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
    width: 160,
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
    width: 129,
    height: 65,
    objectFit: 'contain',
  },
});
