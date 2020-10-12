import {
  MEMBER_GET_PHOTOS_REQUEST,
  MEMBER_ADD_PHOTO_REQUEST,
  MEMBER_REMOVE_PHOTO_REQUEST,
  GetMemberPhotosAction,
  AddMemberPhotoAction,
  RemoveMemberPhotoAction,
} from './member.types';
import {APIPhotoBase} from '../../types';

export const getPhotos = (memberId: string): GetMemberPhotosAction => ({
  type: MEMBER_GET_PHOTOS_REQUEST,
  payload: memberId,
});

export const addPhoto = (
  memberId: string,
  photo: APIPhotoBase,
): AddMemberPhotoAction => ({
  type: MEMBER_ADD_PHOTO_REQUEST,
  payload: {
    memberId,
    ...photo,
  },
});

export const removePhoto = (photoId: string): RemoveMemberPhotoAction => ({
  type: MEMBER_REMOVE_PHOTO_REQUEST,
  payload: photoId,
});
