import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import hamburger from '../assets/images/hamburger.png';
import {colors} from '../assets/colors/colors';
import {useDispatch} from 'react-redux';
import {
  getAllProduct,
  getProductByCategory,
} from '../store/slices/productSlice';

export default function Header() {
  const dispatch = useDispatch<any>();
  const [category, setCategory] = useState<string>('');
  useEffect(() => {
    console.log('category', category);
    if (category.length !== 0) {
      dispatch(getProductByCategory(category));
    } else {
      dispatch(getAllProduct());
    }
  }, [category, dispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSubContainer}>
        <Image source={hamburger} />
        <TextInput
          style={styles.searchField}
          placeholder="Search Product"
          placeholderTextColor={colors.grey}
          onChangeText={text => setCategory(text)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  searchField: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 288,
    textAlign: 'center',
  },
});
