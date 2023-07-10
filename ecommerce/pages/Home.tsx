import {View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../sections/Header';
import List from './List';

export default function Home({navigation}: any) {
  return (
    <View>
      <Header />
      <ScrollView>
        <List navigation={navigation} />
      </ScrollView>
    </View>
  );
}
