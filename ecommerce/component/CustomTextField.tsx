import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Input} from '@rneui/base';
import styled, {css} from 'styled-components/native';

interface StyleProps {
  placeholderTextColor?: string;
  underlineColorAndroid?: string;
  isFullWidth?: boolean;
  hasShadow?: boolean;
  shadowValue?: string;
  inputContainerStyle?: any;
  backgroundColor?: string;
  label?: string;
}

const StyledTextInput = styled(Input)<StyleProps>`
  margin-top: 10px;
  text-align: left;

  ${({hasShadow, shadowValue}) =>
    hasShadow &&
    css`
      shadow-color: ${shadowValue || '#000000'};
      shadow-offset: {
        width: 0;
        height: 2;
      }
      shadow-opacity: 0.4;
      shadow-radius: 4px;
      elevation: 5;
    `}
`;

interface TextFieldProps extends StyleProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  underlineColorAndroid,
  isFullWidth,
  hasShadow,
  shadowValue,
  rightIcon,
  leftIcon,
  inputContainerStyle,
  backgroundColor,
  label,
}) => {
  const customInputContainerStyle = [
    styles.inputContainer,
    {
      borderBottomWidth: 1,
      width: isFullWidth ? '100%' : 137,
      backgroundColor: backgroundColor,
    },
    inputContainerStyle,
  ];

  return (
    <>
      <Text style={styles.labelStyle}>{label}</Text>
      <StyledTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid={underlineColorAndroid}
        isFullWidth={isFullWidth}
        hasShadow={hasShadow}
        shadowValue={shadowValue}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        inputContainerStyle={customInputContainerStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D8DADC',
    width: 168,
  },
  labelStyle: {
    paddingLeft: 20,
    paddingBottom: 6,
    color: '#18270B',
    fontSize: 16,
    fontWeight: '500',
  },
});
