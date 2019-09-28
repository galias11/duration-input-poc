// @Vendors
import React from 'react';

// @Helpers
import {
  mapValueToArray,
  mapValueToString,
  unmaskValue
} from '../helpers/numberHelper';

class Solution extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentValue: props.value,
      focused: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(state.currentValue !== props.value) {
      return { currentValue: props.value };
    }
  }

  getNextPosition = (current, isBackwards) => {
    console.log(current)
    if(isBackwards && (current === 3 || current === 6)) {
      return current - 2;
    } else if (isBackwards) {
      return current - 1;
    } else if (current === 1 || current === 4) {
      return current + 2;
    } else {
      return current + 1;
    }
  }

  focusNextPosition = (nextPosition) => {
    setTimeout(() => {
      this.input.setSelectionRange(nextPosition, nextPosition + 1);
    }, 0);
  }

  validateValue = (position, value) => {
    if(position === 3 && parseInt(value, 10) > 5) {
      return false;
    }
    return true;
  }

  updateValue = (keyValue, currentPosition, isBackwards) => {
    if(!this.validateValue(currentPosition, keyValue)) {
      this.focusNextPosition(currentPosition, false);
      return;
    }
    const { onChange, value } = this.props;
    const valuesArray = mapValueToArray(value);
    const nextPosition = this.getNextPosition(currentPosition, isBackwards);
    valuesArray[currentPosition] = keyValue;
    const unmaskedValue = unmaskValue(valuesArray)
    onChange(unmaskedValue);
    this.setState({
      currentValue: unmaskedValue
    });
    this.focusNextPosition(nextPosition, isBackwards);
  }

  handleKeyByType = (key, cursorPosition) => {
    switch(key) {
      case "ArrowLeft":
        this.focusNextPosition(this.getNextPosition(cursorPosition, true), true);
        break;
      case "ArrowRight":
        this.focusNextPosition(this.getNextPosition(cursorPosition, false), false);
        break;
      case "Backspace":
        this.updateValue('0', cursorPosition, true);
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.updateValue(key, cursorPosition, false);
        break;
      default:
        break;
    }
  }

  handleKeyPress = (e) => {
    const cursorPosition = e.target.selectionStart;
    const { key } = e.nativeEvent;
    this.handleKeyByType(key, cursorPosition);
  }

  handleFocus = () => {
    this.focusNextPosition(0);
    this.setState({ focused: true });
  }

  handleBlur = () => {
    this.setState({ focused: false });
  }

  handleMousePress = (e) => {
    const { focused } = this.state;
    if(focused) {
      e.preventDefault()
    }
  }

  render() {
    const { currentValue } = this.state;
    return (
      <div>
        <input
          ref={ref => this.input = ref}
          value={mapValueToString(currentValue)}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onMouseDown={this.handleMousePress}
          onKeyDown={this.handleKeyPress}/>
      </div>
    );
  }
};

export default Solution;