import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Product} from '../types/products.types';
import {colors} from '../assets/colors/colors';

interface ProductDescriptionSectionProps {
  data: Product;
}

export default function ProductDescriptionSection({
  data,
}: ProductDescriptionSectionProps) {
  const [ellipsis, setEllipsis] = useState<number>(3);
  return (
    <View style={styles.container}>
      <View style={styles.priceWrapper}>
        <Text style={styles.productName}>{data.title}</Text>
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
        <Text
          style={styles.description}
          numberOfLines={ellipsis}
          ellipsizeMode="tail">
          {data.description}
        </Text>
        <Text
          style={styles.readMore}
          ellipsizeMode="tail"
          onPress={() => {
            ellipsis > 0 ? setEllipsis(0) : setEllipsis(3);
          }}>
          {ellipsis > 0 ? 'Read More' : 'Show Less'}
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
    width: 250,
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
