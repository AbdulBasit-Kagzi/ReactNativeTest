import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  title: string;
  shadow: boolean;
}

export const CustomButton2 = ({
  onPress,
  style,
  title,
  shadow,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, shadow && styles.buttonShadow]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // Example constant style
    padding: 10,
    borderRadius: 5,
    width: 250,
  },
  buttonText: {
    color: '#FFFFFF', // Example constant style
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonShadow: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 15,
  },
});
