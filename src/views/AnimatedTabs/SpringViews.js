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
      blueScale: new Animated.Value(1),
      redWidth: new Animated.Value(100),
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
    Animated.spring(
      this.state.yellowScale,
      {
        toValue: this._yellowScale - 0.1,
        friction: 1,
      }
    ).start();
  }

  _onPressBlue() {
    Animated.spring(
      this.state.blueScale,
      {
        toValue: this._blueScale - 0.1,
      }
    ).start();
  }

  _onPressRed() {
    Animated.spring(
      this.state.redWidth,
      {
        toValue: 10,
        velocity: 3,  // Velocity makes it move
        tension: -10, // Slow
      }
    ).start();
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Spring</Text>
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
          <Text>Spring and Friction</Text>
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
        <View style={styles.container}>
          <Text>Slow Spring Animation</Text>
          <TouchableWithoutFeedback onPress={this._onPressRed.bind(this)}>
            <Animated.View style={{
                backgroundColor: "red",
                width: this.state.redWidth,
                height: 100
              }}>
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