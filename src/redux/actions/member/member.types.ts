import {APIPhotoBase} from '../../types';

export const MEMBER_GET_PHOTOS_REQUEST = 'MEMBER/GET_PHOTOS_REQUEST';
export const MEMBER_GET_PHOTOS_SUCCESS = 'MEMBER/GET_PHOTOS_SUCCESS';
export const MEMBER_GET_PHOTOS_FAILURE = 'MEMBER/GET_PHOTOS_FAILURE';

export const MEMBER_ADD_PHOTO_REQUEST = 'MEMBER/ADD_PHOTO_REQUEST';
export const MEMBER_ADD_PHOTO_SUCCESS = 'MEMBER/ADD_PHOTO_SUCCESS';
export const MEMBER_ADD_PHOTO_FAILURE = 'MEMBER/ADD_PHOTO_FAILURE';

export const MEMBER_REMOVE_PHOTO_REQUEST = 'MEMBER/REMOVE_PHOTO_REQUEST';
export const MEMBER_REMOVE_PHOTO_SUCCESS = 'MEMBER/REMOVE_PHOTO_SUCCESS';
export const MEMBER_REMOVE_PHOTO_FAILURE = 'MEMBER/REMOVE_PHOTO_FAILURE';

export interface GetMemberPhotosAction {
  type: typeof MEMBER_GET_PHOTOS_REQUEST;
  payload: string;
}

export interface AddMemberPhotoAction {
  type: typeof MEMBER_ADD_PHOTO_REQUEST;
  payload: APIPhotoBase & {
    memberId: string;
  };
}

export interface RemoveMemberPhotoAction {
  type: typeof MEMBER_REMOVE_PHOTO_REQUEST;
  payload: string;
}

export type MemberActionTypes =
  | GetMemberPhotosAction
  | AddMemberPhotoAction
  | RemoveMemberPhotoAction;
