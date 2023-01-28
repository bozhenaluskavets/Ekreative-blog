import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements, paginate } from '../../store/slices/announcements';
import { Content } from './style';

import { Disclaimer } from '../../components/Disclaimer';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Paginator } from '../../components/Paginator';
import { ListItem } from '../../components/ListItem';
import { CreateAnnounsForm } from '../../components/createForms/CreateAnnounsForm';

export const AnnouncementsList = () => {
  const [isShownCreateForm, setIsShownCreateForm] = useState(false);

  const show = () => {
    setIsShownCreateForm(true);
  };

  const hide = () => {
    setIsShownCreateForm(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, []);

  const reduxData = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    announcements: state.announcements.pagination.data,
    isLoading: state.ui.isLoading,
    pageCount: state.announcements.pagination.totalPages,
  }));

  const { announcements, pageCount } = reduxData;

  const renderAnnouncements = () => {
    return announcements.map((ann) => {
      return (
        <Fragment key={ann.id}>
          <ListItem data={ann} route={'announcements'} />
        </Fragment>
      );
    });
  };

  if (reduxData.isLoading) {
    return;
  }

  const notAuth = isShownCreateForm && !reduxData.isAuthenticated;
  const isAuth = isShownCreateForm && reduxData.isAuthenticated;

  return (
    <Container>
      <Content>
        <Title>Announcements</Title>
        {!isShownCreateForm && (
          <OBcentering>
            <OptionsButton onClick={show}>Create</OptionsButton>
          </OBcentering>
        )}

        {notAuth && (
          <>
            <Disclaimer />
            <OBcentering>
              <OptionsButton onClick={hide}>OK</OptionsButton>
            </OBcentering>
          </>
        )}

        {isAuth && (
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
