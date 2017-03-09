import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class RecentChatsScreen extends Component {
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