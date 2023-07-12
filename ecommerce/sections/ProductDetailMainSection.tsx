import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ellipsis from '../assets/images/Ellips.png';
import {Product} from '../types/products.types';
import backChevron from '../assets/images/chevron.png';
import heart from '../assets/images/whiteHeart.png';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {like_dislike} from '../store/slices/likeSlice';
import filled_heart from '../assets/images/9004758_heart_love_valentine_like_icon.png';

const screenHeight = Dimensions.get('window').height;

interface ProductDetailMainSectionProps {
  data: Product;
  navigation: any;
}
export default function ProductDetailMainSection({
  data,
  navigation,
}: ProductDetailMainSectionProps) {
  const dispatch = useDispatch();
  const {likeProducts} = useSelector((state: RootState) => state.like);
  const [likedProduct, setLikedProduct] = useState<Product>();
  useEffect(() => {
    let temp = likeProducts.find(product => product.id === data.id);
    setLikedProduct(temp);
  }, [data, likeProducts]);
  return (
    <View>
      <ImageBackground style={styles.ImageBackgroundStyle} source={ellipsis}>
        <View style={styles.container}>
          <Image style={styles.heroImage} source={{uri: data.image}} />
          <View style={styles.iconsContiner}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={backChevron} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(like_dislike(data))}>
              <Image
                style={styles.heartImage}
                source={likedProduct?.id === data.id ? filled_heart : heart}
              />
            </TouchableOpacity>
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
  heartImage: {
    width: 29,
    height: 24,
  },
});
