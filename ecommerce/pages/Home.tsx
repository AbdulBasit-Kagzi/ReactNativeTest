import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../sections/Header';
import List from './List';

export default function Home() {
  return (
    <View>
      <Header />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({});
