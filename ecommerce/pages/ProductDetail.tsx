import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Product} from '../types/products.types';
import ProductDetailMainSection from '../sections/ProductDetailMainSection';
import ProductImageList from '../sections/ProductImageList';
import ProductDescriptionSection from '../sections/ProductDescriptionSection';
import {colors} from '../assets/colors/colors';
import ProductRatingSection from '../sections/ProductRatingSection';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/slices/cartSlice';
const screenHeight = Dimensions.get('window').height;
export default function ProductDetail({route, navigation}: any) {
  const dispatch = useDispatch();

  const [productDetail, setProductDetail] = useState<Product>(
    route.params.data,
  );
  return (
    <ScrollView bounces={false}>
      <SafeAreaView style={{backgroundColor: colors.white}}>
        <ProductDetailMainSection
          data={productDetail}
          navigation={navigation}
        />
        <ProductImageList data={productDetail} />
        <ProductDescriptionSection data={productDetail} />
        <ProductRatingSection data={productDetail} />
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 50,
            marginBottom: screenHeight * 0.05,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.black,
              paddingHorizontal: 24,
              paddingVertical: 12,
              elevation: 8,
              borderRadius: 10,
            }}
            onPress={() => dispatch(addToCart(productDetail))}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: colors.white,
                alignSelf: 'center',
              }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
