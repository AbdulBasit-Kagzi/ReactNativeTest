import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Product} from '../types/products.types';

import {colors} from '../assets/colors/colors';

interface ProductImageListProp {
  data: Product;
}

export default function ProductImageList({data}: ProductImageListProp) {
  const [imageId, setImageId] = useState<number>(0);
  return (
    <ScrollView horizontal={true}>
      <View style={styles.imageContainerWrapper}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setImageId(index)}>
              <View
                style={
                  imageId !== index
                    ? styles.imageContainer
                    : styles.imageContainer2
                }>
                <Image
                  source={{uri: data.image}}
                  style={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainerWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    gap: 10,
    marginTop: 150,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#D8D8DD',
    width: 60,
    height: 60,
    borderRadius: 10,
    borderStyle: 'solid',
  },
  imageContainer2: {
    borderWidth: 1,
    borderColor: colors.black,
    width: 60,
    height: 60,
    borderRadius: 10,
    borderStyle: 'solid',
  },
});
