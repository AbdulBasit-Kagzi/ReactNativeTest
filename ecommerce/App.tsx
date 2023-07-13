import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useEffect} from 'react';
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
import {RootState, store} from './store/store';
import ProductDetail from './pages/ProductDetail';
import {Icon} from '@rneui/themed';
import {Avatar} from '@rneui/themed';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {cartProducts} = useSelector((state: RootState) => state.cart);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: colors.purple,
          tabBarInactiveTintColor: '#838383',
          tabBarShowLabel: true,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" type="octicon" size={33} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarIcon: ({color}) => (
              <Icon
                name="cookie-outline"
                type="material-community"
                size={33}
                color={color}
              />
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
                  name="add-circle-outline"
                  type="ionicon"
                  size={33}
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
              <Icon name="heart" type="feather" size={33} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="user" type="feather" size={33} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
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
    height: 98,
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 1,
    shadowRadius: 11,
  },
});
