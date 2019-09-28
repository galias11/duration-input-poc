// @Constants
import {
  DURATION_TIME_MINUTE_SEPARATOR,
  DURATION_TIME_MS_SEPARATOR
} from '../constans/constants';

const getMinutes = (timeInMS=0) => {
  const minValue =  Math.floor(timeInMS / 60000).toString();
  return minValue.length > 1 ? minValue : `0${minValue}`;
};

const getSeconds = (timeInMS=0) => {
  const secValue = Math.floor(timeInMS / 1000 % 60).toString();
  return secValue.length > 1 ? secValue : `0${secValue}`;
};

const getMS = (timeInMS=0) => {
  const msValue = (timeInMS % 1000).toString();
  if(msValue.length === 3) {
    return msValue;
  }
  return msValue.length > 1 ? `0${msValue}` : `00${msValue}`;
};

const unmaskValue = timeArray => {
  const minutes = parseInt(timeArray.slice(0, 2).join(''), 0);
  const seconds = parseInt(timeArray.slice(3, 5).join(''), 0);
  const ms = parseInt(timeArray.slice(6, 9).join(''), 0);
  return minutes * 60000 + seconds * 1000 + ms;
};

const mapValueToArray = timeInMS => {
  const minutes = getMinutes(timeInMS);
  const seconds = getSeconds(timeInMS);
  const ms = getMS(timeInMS);
  return [
    ...Array.from(minutes),
    DURATION_TIME_MINUTE_SEPARATOR,
    ...Array.from(seconds),
    DURATION_TIME_MS_SEPARATOR,
    ...Array.from(ms)
  ];
};

const mapValueToString = timeInMS => mapValueToArray(timeInMS).join('');

export {
  getMinutes,
  getSeconds,
  getMS,
  mapValueToArray,
  mapValueToString,
  unmaskValue
}