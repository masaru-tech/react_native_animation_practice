import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'SpringViews'
  },
  {
    name: 'TimingViews'
  }
];

export default class AnimatedViewList extends Component {
  static navigationOptions = {
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,
      tintColor: 'white', // ヘッダーの文字色
      style: {
        backgroundColor: 'blue' // ヘッダーの背景色
      },
      title: 'Animated Tab',
    }),
  }

  render() {
    return(
      <List containerStyle={{marginTop: 0}}>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              onPress={() => this.props.navigation.navigate(l.name)}
            />
          ))
        }
      </List>
    )
  }
}