import React, {useState, useEffect} from 'react';
import {BottomSheet} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {Text} from '@rneui/themed';
import {
  productFilter,
  setprice,
  setrating,
  sheet,
} from '../store/slices/productSlice';

import {Slider} from '@miblanchard/react-native-slider';
import {colors} from '../assets/colors/colors';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const dispatch = useDispatch<any>();
  const {openSheet} = useSelector((state: RootState) => state.product);
  const [isVisible, setIsVisible] = useState<boolean>(openSheet);
  const [price, setPrice] = useState<number[]>([0, 10]);
  const [rating, setRating] = useState<number>(1);

  useEffect(() => {
    setIsVisible(openSheet);
  }, [openSheet]);

  return (
    <SafeAreaProvider>
      <BottomSheet
        modalProps={{}}
        onBackdropPress={() => dispatch(sheet(false))}
        backdropStyle={{}}
        isVisible={isVisible}>
        <View style={styles.wrapper}>
          <Slider
            value={price}
            onValueChange={value => {
              setPrice(value);
              dispatch(setprice(value));
            }}
            onSlidingComplete={() => {
              dispatch(productFilter());
            }}
            minimumValue={0}
            maximumValue={1000}
            step={10}
            minimumTrackTintColor={colors.darkGrey}
            maximumTrackTintColor={colors.darkGrey}
          />
          <Text style={{paddingTop: 20, paddingBottom: 20}}>
            {`Price :${price[0]} - ${price[1]}`}
          </Text>

          <Slider
            value={rating}
            onValueChange={value => {
              setRating(value[0]);
              dispatch(setrating([0, value]));
            }}
            maximumValue={5}
            minimumValue={0}
            onSlidingComplete={() => dispatch(productFilter())}
            step={1}
          />
          <Text style={{paddingTop: 20, paddingBottom: 20}}>
            Rating: {rating}
          </Text>
        </View>
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  BottomSheet: {
    height: 100,
  },
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default BottomSheetComponent;
