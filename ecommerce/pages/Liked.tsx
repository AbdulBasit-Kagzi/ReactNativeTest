import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {colors} from '../assets/colors/colors';
import ListCard from '../component/ListCard';
export default function Cart() {
  const {likeProducts} = useSelector((state: RootState) => state.like);
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 10}}>
        <Text style={styles.heading}>Like Products</Text>
        <Text style={styles.subHeading}>{likeProducts.length} products</Text>
        {likeProducts.length > 0 ? (
          <View style={styles.CardWrapper}>
            {likeProducts?.map(data => {
              return <ListCard key={data.id} data={data} />;
            })}
          </View>
        ) : (
          <Text style={styles.heading}>No Product Found</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    color: colors.black,
    fontWeight: '800',
    fontSize: 30,
    alignSelf: 'center',
  },
  subHeading: {
    color: colors.black,
    fontWeight: '800',
    fontSize: 20,
    marginTop: 20,
  },
  CardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 20,
    marginBottom: 80,
  },
});
