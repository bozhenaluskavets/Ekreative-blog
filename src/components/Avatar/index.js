import { Fragment } from 'react';
import { Error } from '../../globalStyles/forms.style';
import { avatarsArray } from './avatars';
import { Avatars, Content, Container, AvatarBlock, Input } from './style';

export const AvatarComponent = ({ error, register }) => {
  return (
    <Container>
      <Content>
        {avatarsArray.map((avatar) => {
          const avatarData = register('avatar', {
            required: 'Please select image for your avatar',
          });
          return (
            <Fragment key={avatar.id}>
              <AvatarBlock>
                <Avatars src={avatar.img} alt="avatar" />
                <Input type="radio" {...avatarData} value={avatar.id} />
              </AvatarBlock>
              <Error>{error}</Error>
            </Fragment>
          );
        })}
      </Content>
    </Container>
  );
};
