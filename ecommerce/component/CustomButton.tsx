// import {Button} from '@rneui/themed';
import {StyleSheet, Button} from 'react-native';
import React from 'react';
import styled from 'styled-components';

interface Button {
  variant: ButtonVariant;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const StyledButton = styled.Button<{variant: ButtonVariant}>`
  min-width: 200px;
  border: none;
  font-size: 10px !important;
  padding: 50px 10px;
  /* The resulting background color will be based on the bg props. */
  background-color: ${({variant}) =>
    variant === ButtonVariant.PRIMARY ? 'red' : 'black'};
`;

export default function CustomButton({variant}: Button) {
  console.log('var', variant);
  return <StyledButton variant={variant} title={'React Native Elements'} />;
}

// const styles = StyleSheet.create({
//   constStyle: (variant: any) => ({
//     width: 200,
//     marginHorizontal: 50,
//     marginVertical: 10,
//     backgroundColor: variant === ButtonVariant.PRIMARY ? 'blue' : 'red',
//   }),
// });
