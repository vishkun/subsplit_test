import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import details from '../screens/details';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ Navigation }) => {
      return {
        headerTitle: () => <Header title='VISAPP' Navigation={Navigation} />
      }
    },
  },
  details: {
    screen: details,
    NavigationOptions: {
      title: 'details',
    }
  },
};


const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;


