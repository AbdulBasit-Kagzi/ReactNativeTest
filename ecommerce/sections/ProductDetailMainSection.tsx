import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import ellipsis from '../assets/images/Ellips.png';
import {Product} from '../types/products.types';
import backChevron from '../assets/images/chevron.png';
import heart from '../assets/images/whiteHeart.png';

const screenHeight = Dimensions.get('window').height;

interface ProductDetailMainSectionProps {
  data: Product;
}
export default function ProductDetailMainSection({
  data,
}: ProductDetailMainSectionProps) {
  return (
    <View>
      <ImageBackground style={styles.ImageBackgroundStyle} source={ellipsis}>
        <View style={styles.container}>
          <Image style={styles.heroImage} source={{uri: data.image}} />
          <View style={styles.iconsContiner}>
            <Image source={backChevron} />
            <Image source={heart} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  ImageBackgroundStyle: {
    height: screenHeight * 0.25,
    position: 'relative',
  },
  heroImage: {
    width: 315,
    height: 229,
    position: 'absolute',
    top: 100,
    left: 30,
    objectFit: 'contain',
    elevation: 5,
  },
  iconsContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
});
