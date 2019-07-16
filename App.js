import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import MovieScreen from './Screens/MovieScreen'

const MainNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  },
  Movie: {
    screen: MovieScreen,
    navigationOptions: {
      title: 'Movie'
    }
  }
}, 
{
  initialRouteName: 'Home',
})

const AppCon = createAppContainer(MainNav)

export class App extends Component {
  render() {
      return (
          <AppCon />
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
});

export default App

