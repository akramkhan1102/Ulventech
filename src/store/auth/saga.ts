import { put, takeEvery, call, delay } from 'redux-saga/effects'
import * as actions from './actions';
import apiServices from '../../services/apiServices';
import core from '../core';
import { Alert } from 'react-native';


export function* formSaga(action: actions.IActionFormGet) {
  try {
    yield put(core.actions.setLoading(true))
    const { data } = yield call(apiServices.auth.getForm)
    yield put(actions.setForm(data.data))
  } catch(e) {

  } finally {
    yield put(core.actions.setLoading(false))
  }

}

export function* postSaga(action: actions.IActionFormPost) {
  try {
    yield put(core.actions.setLoading(true))
    const { data } = yield call(apiServices.auth.postForm, action.payload)
    Alert.alert('Form Submitted', JSON.stringify(data))
  } catch(e) {

  } finally {
    yield put(core.actions.setLoading(false))
  }

}


export default [
  takeEvery(actions.ActionTypes.AUTH_FORM_GET, formSaga),
  takeEvery(actions.ActionTypes.AUTH_FORM_POST, postSaga),
];