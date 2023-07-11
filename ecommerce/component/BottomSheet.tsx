import React, {useState, useEffect} from 'react';
import {BottomSheet} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {Slider, Text, Icon} from '@rneui/themed';
import {sheet} from '../store/slices/productSlice';
type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const dispatch = useDispatch<any>();
  const {openSheet} = useSelector((state: RootState) => state.product);
  const [isVisible, setIsVisible] = useState<boolean>(openSheet);
  const [value, setValue] = useState(0);
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
            value={value}
            onValueChange={setValue}
            maximumValue={500}
            minimumValue={0}
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
            Price: {value}
          </Text>

          <Slider
            value={value}
            onValueChange={setValue}
            maximumValue={500}
            minimumValue={0}
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
            Rating: {value}
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
