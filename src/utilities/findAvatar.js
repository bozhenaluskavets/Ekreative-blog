import { useSelector } from 'react-redux';
import { avatarsArray } from '../components/Avatar/avatars';

export const findAvatarSrc = () => {
  const { userInfo } = useSelector((state) => {
    return { userInfo: state.auth.userInfo };
  });
  const userAvId = userInfo.avatar;
  if (userAvId === undefined) {
    return null;
  }
  const response = avatarsArray.find((avatar) => avatar.id === +userAvId);
  return response.img;
};
