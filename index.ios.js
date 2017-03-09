/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

class RecentChatsScreen extends Component {
  static navigationOptions = {
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,
      visible: true,
      tintColor: 'white', // ヘッダーの文字色
      style: {
        backgroundColor: 'blue' // ヘッダーの背景色
      },
      title: 'Page1',
    }),
  }

  render() {
    return(
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}

class AllContactsScreen extends Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

class ChatScreen extends Component {
  render() {
    return <Text>Chat View</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});


AppRegistry.registerComponent('react_native_animation_practice', () => App);
