import { avatarsArray } from '../components/Avatar/avatars';
import defaultAv from '../assets/defaultAvatar.png';

export const findAvatarSrc = (userInfo) => {
  const userAvId = userInfo.avatar;

  const response = avatarsArray.find((avatar) => avatar.id === +userAvId);

  return response ? response.img : defaultAv;
};
