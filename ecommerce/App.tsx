import {StyleSheet} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Profile from './pages/Profile';
import List from './pages/List';
import Cart from './pages/Cart';
import {colors} from './assets/colors/colors';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootState, store} from './store/store';
import ProductDetail from './pages/ProductDetail';
import {Icon} from '@rneui/themed';
import {Avatar} from '@rneui/themed';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Icon.loadFont();

export const TabNavigation = () => {
  const {cartProducts} = useSelector((state: RootState) => state.cart);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.white,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" type="feather" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="list" type="feather" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <>
              <Icon
                style={{position: 'relative'}}
                name="shopping-bag"
                type="feather"
                size={25}
                color={color}
              />
              {cartProducts.length > 0 && (
                <Avatar
                  size={20}
                  rounded
                  title={cartProducts.length.toString()}
                  containerStyle={{
                    backgroundColor: '#3d4db7',
                    position: 'absolute',
                    left: 40,
                    top: 10,
                  }}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="heart" type="feather" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user" type="feather" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Tab Navigator" component={TabNavigation} />
          <Stack.Screen name="Product Detail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
  },
});
