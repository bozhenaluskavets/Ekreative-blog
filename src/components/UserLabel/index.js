import { Avatar } from '../../globalStyles/multiComponents.style';
import { findAvatarSrc } from '../../utilities/findAvatar';
import { CAvatar, CName, CUser, Name, User } from './style';
import defaultAvatar from '../../assets/defaultAvatar.png';

export const UserLabel = ({ data }) => {
  const userName = `${data.user.firstname} ${data.user.lastname}`;
  const img = findAvatarSrc(data.user);
  return img === null ? (
    <User>
      <Avatar src={defaultAvatar} alt="avatar" />
      <Name>{userName}</Name>
    </User>
  ) : (
    <User>
      <Avatar src={img} alt="avatar" />
      <Name>{userName}</Name>
    </User>
  );
};

export const CommentUserLabel = ({ data }) => {
  const userName = `${data.user.firstname} ${data.user.lastname}`;
  const img = findAvatarSrc(data.user);
  return img === null ? (
    <CUser>
      <CAvatar src={defaultAvatar} alt="avatar" />
      <CName>{userName}</CName>
    </CUser>
  ) : (
    <CUser>
      <CAvatar src={img} alt="avatar" />
      <CName>{userName}</CName>
    </CUser>
  );
};
