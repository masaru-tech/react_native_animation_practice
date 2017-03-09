import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class DecayViews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedLeft: new Animated.Value(0)
    };
  }

  _goAnimation() {
    Animated.parallel([
      Animated.timing(
        this.state.animatedLeft,
        {
          toValue: width,
          duration: 6000
        }
      ),
      Animated.decay(this.state.animatedLeft, {
        velocity: 0.8,
        deceleration: 0.997
      })
    ]).start();
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Animated.View style={{
              position: 'absolute',
              backgroundColor: "yellow",
              width: 50,
              height: 50,
              top: 100,
              left: this.state.animatedLeft,
            }}>
          </Animated.View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button raised large onPress={this._goAnimation.bind(this)} title="Start" buttonStyle={{backgroundColor: 'orange'}} />
        </View>
      </View>
    )
  }
}