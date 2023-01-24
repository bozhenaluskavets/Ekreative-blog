import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import dateFormat, { masks } from 'dateformat';

import { fetchAnnouncements } from '../../store/slices/announcements';
import { Content, Extra, Item, Items, Announcement, Announcements } from './style';
import { CreateAnnounsForm } from '../../components/CreateAnnounsForm';
import { Disclaimer } from '../../components/Disclaimer';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Paginator } from '../../components/Paginator';
import { paginate } from '../../store/slices/posts';

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
    announcements: state.announcements.pagination.data,
    pageCount: state.announcements.pagination.totalPages,
    isLoading: state.ui.isLoading,
  }));

  const { announcements, pageCount } = reduxData;

  const renderAnnouncements = () => {
    return announcements.map((ann) => {
      const formatTime = (time) => {
        if (time) {
          masks.formatTime = 'dd.mm.yyyy';
          return dateFormat(time, 'formatTime');
        }
        return 'no time';
      };

      const formatCreatedAt = formatTime(ann.createdAt);
      const formatUpdatedAt = formatTime(ann.updatedAt);

      return (
        <Announcements key={ann.id}>
          <Announcement>
            <Link to={`/announcements/${ann.id}`}>
              <Extra>{ann.title}</Extra>
            </Link>
            <Items>
              <Item>Created: {formatCreatedAt}</Item>
              <Item>Updated: {formatUpdatedAt}</Item>
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
        <Paginator
          pageCount={pageCount}
          handlePageClick={(event) => {
            dispatch(paginate(event.selected));
          }}
        />
      </Content>
    </Container>
  );
};
