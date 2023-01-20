import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAnnouncements } from '../../store/slices/announcements';
import { Content, Extra, Item, Items, Announcement, Announcements } from './style';
import { CreateAnnounsForm } from '../../components/CreateAnnounsForm';

import { Disclaimer } from '../../components/Disclaimer';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';

export const AnnouncementsList = () => {
  const [isShown, setIsShown] = useState(false);

  const show = () => {
    setIsShown(true);
  };

  const hide = () => {
    setIsShown(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, []);

  const reduxData = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    list: state,
    isLoading: state.ui.isLoading,
  }));

  const renderAnnouncements = () => {
    const announcement = reduxData.list.announcements.list;

    return announcement.map((ann) => {
      return (
        <Announcements key={ann.id}>
          <Announcement>
            <Link to={`/announcements/${ann.id}`}>
              <Extra>{ann.title}</Extra>
            </Link>
            <Items>
              <Item>Created: {ann.createdAt}</Item>
              <Item>Updated: {ann.updatedAt}</Item>
            </Items>
          </Announcement>
        </Announcements>
      );
    });
  };

  if (reduxData.isLoading) {
    return;
  }

  return (
    <Container>
      <Content>
        <Title>Announcements</Title>
        {!isShown && (
          <OBcentering>
            <OptionsButton onClick={show}>Create</OptionsButton>
          </OBcentering>
        )}

        {isShown && !reduxData.isAuthenticated && (
          <>
            <Disclaimer />
            <OBcentering>
              <OptionsButton onClick={hide}>OK</OptionsButton>
            </OBcentering>
          </>
        )}

        {isShown && reduxData.isAuthenticated && (
          <OBcentering>
            <CreateAnnounsForm />
            <OptionsButton onClick={hide}>Hide form</OptionsButton>
          </OBcentering>
        )}
        {renderAnnouncements()}
      </Content>
    </Container>
  );
};
