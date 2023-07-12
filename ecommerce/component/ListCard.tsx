import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import heart from '../assets/images/heart.png';
import filled_heart from '../assets/images/9004758_heart_love_valentine_like_icon.png';
import {colors} from '../assets/colors/colors';
import {Product} from '../types/products.types';
import {useDispatch, useSelector} from 'react-redux';
import {like_dislike} from '../store/slices/likeSlice';
import {RootState} from '../store/store';

interface ListCardProps {
  data: Product;
}

export default function ListCard({data}: ListCardProps) {
  const dispatch = useDispatch();
  const {likeProducts} = useSelector((state: RootState) => state.like);
  const [likedProduct, setLikedProduct] = useState<Product>();

  useEffect(() => {
    let temp = likeProducts.find(product => product.id === data.id);
    setLikedProduct(temp);
  }, [data, likeProducts]);
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.heartTouchableOpacity}
          onPress={() => {
            dispatch(like_dislike(data));
          }}>
          <Image
            style={styles.heartImage}
            source={likedProduct?.id === data.id ? filled_heart : heart}
          />
        </TouchableOpacity>
        <Image style={styles.productImage} source={{uri: data.image}} />
        <Text style={styles.company} ellipsizeMode="tail" numberOfLines={2}>
          {data.title}
        </Text>
        <Text style={styles.shoesName} ellipsizeMode="tail" numberOfLines={2}>
          {data.description}
        </Text>
        <Text style={styles.price}>${data.price}</Text>
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
    elevation: 2,
  },
  heartTouchableOpacity: {
    position: 'absolute',
    left: 125,
    top: 15,
    width: 20,
    height: 16,
    padding: 5,
  },
  heartImage: {
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
