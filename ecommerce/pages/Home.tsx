import {View, Image, TextInput, Text} from 'react-native';
import React from 'react';
import Header from '../sections/Header';
import List from './List';
import BottomSheetComponent from '../component/BottomSheet';
import CustomButton, {ButtonVariant} from '../component/CustomButton';
import {CustomButton2} from '../component/CustomButton2';
import {Button} from '../component/CustomButton3';
import {TextField} from '../component/CustomTextField';
import {Input} from '@rneui/themed';
import command from '../assets/images/chevron.png';
import search from '../assets/images/search.svg';

import heart from '../assets/images/heart.svg';

export default function Home() {
  const CustomRightIcon = ({icon}) => {
    return (
      <View style={{justifyContent: 'center', marginRight: 8}}>
        {typeof icon === 'string' ? (
          <Text>{icon}</Text>
        ) : (
          <Image source={icon} style={{width: 24, height: 24}} />
        )}
      </View>
    );
  };

  return (
    <View>
      <Header />

      <TextField
        placeholder="Siddharth"
        onChangeText={value => console.log(value)}
        value="abdul"
        leftIcon={<CustomRightIcon icon={command} />}
        isFullWidth={true}
        backgroundColor="#FAFAFA"
      />

      <TextField
        label="Abdul"
        placeholder="Raj"
        onChangeText={value => console.log(value)}
        value="jemin"
        hasShadow
        shadowValue="red"
      />
      <View
        style={{
          alignItems: 'center',
          padding: 20,
        }}>
        <Button
          title="I need to sign-up!"
          black
          fontSize={12}
          onPress={() => console.log('')}
          isFullWidth
        />
      </View>

      <List />
      <BottomSheetComponent />
    </View>
  );
}
