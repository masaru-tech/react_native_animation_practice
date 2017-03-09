import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  TouchableWithoutFeedback,
  Easing
} from 'react-native';

export default class SpringViews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yellowScale: new Animated.Value(1),
      blueScale: new Animated.Value(1)
    };
  }

  componentDidMount() {
    this.state.yellowScale.addListener((value) => {
      this._yellowScale = value.value
    });
    this.state.yellowScale.setValue(1);
    this.state.blueScale.addListener((value) => {
      this._blueScale = value.value
    });
    this.state.blueScale.setValue(1);
  }

  _onPressYellow() {
    Animated.timing(
      this.state.yellowScale,
      {
        toValue: this._yellowScale - 0.1,
        // easing: Easing.bounce,
        // easing: Easing.linear,
        easing: Easing.elastic(5),
        duration: 500
      }
    ).start();
  }

  _onPressBlue() {
    Animated.timing(
      this.state.blueScale,
      {
        toValue: this._blueScale - 0.1,
        duration: 500
      }
    ).start();
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Timing</Text>
          <TouchableWithoutFeedback onPress={this._onPressBlue.bind(this)}>
            <Animated.View style={{
                backgroundColor: "blue",
                width: 100,
                height: 100,
                transform: [
                  {scale: this.state.blueScale},
                ]}}>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.container}>
          <Text>Timing</Text>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});