import React, { Component } from 'react';
import { View, PanResponder } from 'react-native';

class GestureResponder extends Component {
  static defaultProps = {
    onSwipeUp: () => {},
    onSwipeRight: () => {},
    onSwipeDown: () => {},
    onSwipeLeft: () => {}
  };
  constructor() {
    super();
    this.state = {
      position: {
        x: 0,
        y: 0
      }
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (event, gesture) => {
        const { dx: x, dy: y } = gesture;
        this.updatePosition(x, y);
      }
    });
  }
  updatePosition = (x, y) => {
    const { position: { x: currentX, y: currentY } } = this.state;
    const { onSwipeUp, onSwipeRight, onSwipeDown, onSwipeLeft } = this.props;

    if (onSwipeUp && onSwipeDown) {
      if (y < currentY) {
        onSwipeUp(x, y);
      } else if (y > currentY) {
        onSwipeDown(x, y);
      }
    }

    if (x < currentX) {
      onSwipeLeft(x, y);
    } else {
      onSwipeRight(x, y);
    }

    this.setState({
      position: {
        x,
        y
      }
    });
  };
  render() {
    const { children } = this.props;
    return
    <View {...this.panResponder.panHandlers}>
      {children}
    </View>;
  }
}

export default GestureResponder;
