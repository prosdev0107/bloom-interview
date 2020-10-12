import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/member';
import {
  MEMBER_GET_PHOTOS_REQUEST,
  MEMBER_GET_PHOTOS_SUCCESS,
  MEMBER_GET_PHOTOS_FAILURE,
  MEMBER_ADD_PHOTO_REQUEST,
  MEMBER_ADD_PHOTO_SUCCESS,
  MEMBER_ADD_PHOTO_FAILURE,
  MEMBER_REMOVE_PHOTO_REQUEST,
  MEMBER_REMOVE_PHOTO_SUCCESS,
  MEMBER_REMOVE_PHOTO_FAILURE,
} from '../actions/member/member.types';
import {API} from '../../services';
import {APIGetPhotosResponse} from '../types';

function* getMemberPhotos({payload}: ReturnType<typeof actions.getPhotos>) {
  try {
    const {data}: {data: APIGetPhotosResponse[]} = yield call(
      API.get,
      `/member/${payload}/photos`,
    );

    yield put({
      type: MEMBER_GET_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: MEMBER_GET_PHOTOS_FAILURE,
      error: e,
    });
  }
}

function* addMemberPhoto({payload}: ReturnType<typeof actions.addPhoto>) {
  try {
    const {data} = yield call(
      API.post,
      `/member/${payload.memberId}/photos`,
      payload,
    );
    yield put({type: MEMBER_ADD_PHOTO_SUCCESS, payload: data});
  } catch (e) {
    yield put({
      type: MEMBER_ADD_PHOTO_FAILURE,
      error: e,
    });
  }
}

function* removeMemberPhoto({payload}: ReturnType<typeof actions.removePhoto>) {
  try {
    yield call(API.delete, `/photos/${payload}`);
    yield put({type: MEMBER_REMOVE_PHOTO_SUCCESS, payload});
  } catch (e) {
    yield put({
      type: MEMBER_REMOVE_PHOTO_FAILURE,
      error: e,
    });
  }
}

export default function* memberSaga() {
  yield takeLatest(MEMBER_GET_PHOTOS_REQUEST, getMemberPhotos);
  yield takeLatest(MEMBER_ADD_PHOTO_REQUEST, addMemberPhoto);
  yield takeLatest(MEMBER_REMOVE_PHOTO_REQUEST, removeMemberPhoto);
}
