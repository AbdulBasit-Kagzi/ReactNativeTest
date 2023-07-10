import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../assets/colors/colors';
import price from '../assets/images/price.png';
import filter from '../assets/images/filter.png';
import ListCard from '../component/ListCard';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProduct} from '../store/slices/productSlice';
import {RootState} from '../store/store';

interface ListProps {
  navigation: any;
}
export default function List({navigation}: ListProps) {
  const dispatch = useDispatch<any>();
  const {Products} = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Sneakers</Text>
          <View style={styles.filter_priceContainer}>
            <Image source={price} />
            <Image source={filter} />
          </View>
        </View>
        <View>
          <Text style={styles.subText}>{Products.length} products found</Text>
        </View>
        <View style={styles.CardWrapper}>
          {Products.map(data => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Product Detail', {data: data})
              }>
              <ListCard key={data.id} data={data} />
            </TouchableOpacity>
          ))}
        </View>
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
});
