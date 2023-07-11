import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../assets/colors/colors';
import price from '../assets/images/price.png';
import filter from '../assets/images/filter.png';
import ListCard from '../component/ListCard';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProduct, sheet} from '../store/slices/productSlice';
import {RootState} from '../store/store';
import {Product} from '../types/products.types';

interface ListProps {
  navigation: any;
}
export default function List({navigation}: ListProps) {
  const dispatch = useDispatch<any>();
  const {isLoading, filterProducts, category} = useSelector(
    (state: RootState) => state.product,
  );

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const [currentData, setCurrentData] = useState<Product[]>();

  useEffect(() => {
    setCurrentData(filterProducts);
  }, [filterProducts]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {' '}
            {category.length > 0 ? category.toUpperCase() : `All Products`}
          </Text>
          <View style={styles.filter_priceContainer}>
            <Image source={price} />
            <TouchableOpacity onPress={() => dispatch(sheet(true))}>
              <Image source={filter} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.subText}>
            {currentData?.length} products found
          </Text>
        </View>
        {currentData?.length === 0 && isLoading ? (
          <View style={styles.loaderWrapper}>
            <ActivityIndicator size="large" color={colors.darkGrey} />
          </View>
        ) : (
          <View style={styles.CardWrapper}>
            {currentData?.length !== 0 ? (
              currentData?.map((data: Product) => (
                <TouchableOpacity
                  key={data.id}
                  onPress={() =>
                    navigation.navigate('Product Detail', {data: data})
                  }>
                  <ListCard key={data.id} data={data} />
                </TouchableOpacity>
              ))
            ) : (
              <View>
                <Text> No data</Text>
              </View>
            )}
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontWeight: '800',
    fontSize: 30,
  },
  filter_priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    paddingTop: 10,
    fontSize: 16,
    color: colors.black,
  },
  CardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 20,
    marginBottom: 80,
  },
  loaderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
