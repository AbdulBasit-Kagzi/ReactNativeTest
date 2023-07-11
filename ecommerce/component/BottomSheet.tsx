import React, {useState, useEffect} from 'react';
import {BottomSheet} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {Slider, Text, Icon} from '@rneui/themed';
import {productFilter, sheet} from '../store/slices/productSlice';
type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const dispatch = useDispatch<any>();
  const {openSheet} = useSelector((state: RootState) => state.product);
  const [isVisible, setIsVisible] = useState<boolean>(openSheet);
  const [price, setPrice] = useState<number>(0);
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
            onValueChange={setPrice}
            maximumValue={500}
            minimumValue={0}
            onSlidingComplete={() => {
              dispatch(productFilter({priceRange: [0, price]}));
            }}
            step={10}
            allowTouchTrack
            trackStyle={{height: 5, backgroundColor: 'transparent'}}
            thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
            thumbProps={{
              children: (
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{bottom: 20, right: 20}}
                />
              ),
            }}
          />
          <Text style={{paddingTop: 20, paddingBottom: 20}}>
            Price: {price}
          </Text>

          <Slider
            value={rating}
            onValueChange={setRating}
            maximumValue={5}
            minimumValue={0}
            onSlidingComplete={() =>
              dispatch(productFilter({rating: [1, rating]}))
            }
            step={1}
            allowTouchTrack
            trackStyle={{height: 5, backgroundColor: 'transparent'}}
            thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
            thumbProps={{
              children: (
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{bottom: 20, right: 20}}
                />
              ),
            }}
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
