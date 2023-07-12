import {View} from 'react-native';
import React from 'react';
import Header from '../sections/Header';
import List from './List';
import BottomSheetComponent from '../component/BottomSheet';

export default function Home() {
  return (
    <View>
      <Header />
      <List />
      <BottomSheetComponent />
    </View>
  );
}
