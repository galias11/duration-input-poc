// @Vendors
import React from 'react';

// @Helpers
import {
  mapValueToArray,
  mapValueToString,
  unmaskValue
} from '../helpers/numberHelper';
import {
  getNextPosition
} from '../helpers/positionHelper';

// @Styles
import './solution.css';

class Solution extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentValue: props.value
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(state.currentValue !== props.value) {
      return { currentValue: props.value };
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
    const nextPosition = getNextPosition(currentPosition, isBackwards);
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
        this.focusNextPosition(getNextPosition(cursorPosition, true), true);
        break;
      case "ArrowRight":
        this.focusNextPosition(getNextPosition(cursorPosition, false), false);
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
        this.focusNextPosition(cursorPosition);
        break;
    }
  }

  handleKeyPress = (e) => {
    const cursorPosition = e.target.selectionStart;
    const { key } = e.nativeEvent;
    this.handleKeyByType(key, cursorPosition);
  }

  handleMousePress = (e) => {
    let cursorPosition = e.target.selectionStart;
    if (cursorPosition === 2 || cursorPosition === 4) {
      cursorPosition += 1;
    }
    this.focusNextPosition(cursorPosition);
    e.preventDefault();
  }

  render() {
    const { currentValue } = this.state;
    return (
      <div>
        <input
          className="time-input"
          ref={ref => this.input = ref}
          value={mapValueToString(currentValue)}
          onMouseUp={this.handleMousePress}
          onKeyDown={this.handleKeyPress}/>
      </div>
    );
  }
};

export default Solution;