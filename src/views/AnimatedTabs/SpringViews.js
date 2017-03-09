import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

export default class SpringViews extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});