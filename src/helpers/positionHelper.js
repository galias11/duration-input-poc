const getNextPosition = (current, isBackwards) => {
  if(isBackwards && current === 0) {
    return current;
  } else if(isBackwards && (current === 3 || current === 6)) {
    return current - 2;
  } else if (isBackwards) {
    return current - 1;
  } if (current === 8) {
    return current;
  } else if (current === 1 || current === 4) {
    return current + 2;
  } else {
    return current + 1;
  }
}

export {
  getNextPosition
};