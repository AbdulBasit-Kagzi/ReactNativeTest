import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Product} from '../types/products.types';
import ProductDetailMainSection from '../sections/ProductDetailMainSection';
import ProductImageList from '../sections/ProductImageList';
import ProductDescriptionSection from '../sections/ProductDescriptionSection';
import {colors} from '../assets/colors/colors';
import ProductRatingSection from '../sections/ProductRatingSection';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/slices/cartSlice';
import {Button} from '../component/CustomButton3';
const screenHeight = Dimensions.get('window').height;
export default function ProductDetail() {
  const dispatch = useDispatch();
  const route = useRoute();
  const nav = useNavigation();

  const [productDetail, setProductDetail] = useState<Product>(
    route?.params?.data,
  );

  return (
    <ScrollView bounces={false}>
      <SafeAreaView style={{backgroundColor: colors.white}}>
        <ProductDetailMainSection data={productDetail} />
        <ProductImageList data={productDetail} />
        <ProductDescriptionSection data={productDetail} />
        <ProductRatingSection data={productDetail} />
        {/* <View
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
        </View> */}
        <View
          style={{
            alignItems: 'center',
            marginTop: 50,
            marginBottom: screenHeight * 0.05,
          }}>
          <Button
            black
            title="Add To Cart"
            isFullWidth={false}
            onPress={() => console.log('')}
            shadow={true}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
