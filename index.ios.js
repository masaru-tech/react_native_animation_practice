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
  Button,
  Animated,
  TouchableWithoutFeedback
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
  constructor(props) {
    super(props);
    this.state = {
      yellowScale: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.state.yellowScale.addListener((value) => {
      this._yellowScale = value.value
    });
    this.state.yellowScale.setValue(1);
  }

  _onPressYellow() {
    Animated.spring(
      this.state.yellowScale,
      {
        toValue: this._yellowScale - 0.1,
        friction: 1,
      }
    ).start();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Chat View</Text>
        <TouchableWithoutFeedback onPress={this._onPressYellow.bind(this)}>
          <Animated.View style={{
              backgroundColor: "yellow",
              width: 100,
              height: 100,
              transform: [
                {scale: this.state.yellowScale},
              ]}}>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('react_native_animation_practice', () => App);
