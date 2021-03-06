import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    //immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象，不会改变原始的immutable数据
    return state.set('focused', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  return state;
}
