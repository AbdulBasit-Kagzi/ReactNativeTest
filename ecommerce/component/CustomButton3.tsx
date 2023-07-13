import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

interface StyleProps {
  black?: boolean;
  white?: boolean;
  small?: boolean;
  radius?: number;
  isFullWidth?: boolean;
}

const Wrapper = styled(TouchableOpacity)<StyleProps>`
  height: 48px;
  background-color: ${({black, white}) => (black ? 'black' : 'white')};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: ${({isFullWidth}) => (isFullWidth ? '100%' : '335px')};
`;

interface ButtonProps extends StyleProps {
  title: string | React.ReactNode;
  onPress: () => void;
  shadow?: boolean;
  fontSize?: 12 | 16;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  shadow,
  disabled,
  black,
  white,
  small,
  radius = 4,
  isFullWidth = true,
}) => {
  return (
    <Wrapper
      isFullWidth={isFullWidth}
      radius={radius}
      onPress={disabled ? () => {} : onPress}
      activeOpacity={disabled ? 1 : 0.8}
      black={black}
      white={white}
      small={small}>
      <Text style={styles.text}>{title}</Text>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
