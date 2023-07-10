import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Product} from '../types/products.types';
import {colors} from '../assets/colors/colors';

interface ProductDescriptionSectionProps {
  data: Product;
}

export default function ProductDescriptionSection({
  data,
}: ProductDescriptionSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.priceWrapper}>
        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
          {data.title}
        </Text>
        <Text style={styles.price}>${data.price}</Text>
      </View>
      <View
        style={{
          paddingTop: 8,
          paddingBottom: 8,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D8D8DD',
          }}></View>
      </View>
      <View>
        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
          {data.description}
        </Text>
        <Text style={styles.readMore} numberOfLines={3} ellipsizeMode="tail">
          Read more
        </Text>
      </View>
      <View
        style={{
          paddingTop: 8,
          paddingBottom: 8,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D8D8DD',
          }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  productName: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '800',
  },
  price: {
    color: colors.black,
    fontSize: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.black,
  },
  readMore: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '700',
    marginTop: 8,
  },
});
