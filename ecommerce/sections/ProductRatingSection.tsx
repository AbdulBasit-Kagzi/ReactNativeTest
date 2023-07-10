import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AirbnbRating} from '@rneui/themed';
import {colors} from '../assets/colors/colors';
import {Product} from '../types/products.types';

interface ProductRatingSectionProps {
  data: Product;
}
export default function ProductRatingSection({
  data,
}: ProductRatingSectionProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.rating}>Rating</Text>
      </View>
      <View style={styles.ratingConatiner}>
        <AirbnbRating
          count={5}
          defaultRating={data.rating.rate}
          showRating={false}
        />
        <Text style={{alignItems: 'center'}}>({data.rating.count})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  rating: {
    fontSize: 15,
    color: colors.black,
    fontWeight: '600',
  },
  ratingConatiner: {
    flexDirection: 'row',
    paddingTop: 7,
  },
});
