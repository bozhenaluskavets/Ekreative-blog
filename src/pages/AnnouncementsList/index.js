import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements, paginate } from '../../store/slices/announcements';
import { Content } from './style';

import { Disclaimer } from '../../components/Disclaimer';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { Paginator } from '../../components/Paginator';
import { ListItem } from '../../components/ListItem';
import { CreateAnnounsForm } from '../../components/createForms/CreateAnnounsForm';
import { useToggle } from '../../utilities/toggleController';
import { CreateOption } from '../../components/ButtonOptions';

export const AnnouncementsList = () => {
  const [isShown, toggle] = useToggle();

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

  const announsComponent = announcements.map((ann) => {
    return (
      <Fragment key={ann.id}>
        <ListItem data={ann} route={'announcements'} />
      </Fragment>
    );
  });

  if (reduxData.isLoading) {
    return;
  }

  const showDisclaimer = isShown && !reduxData.isAuthenticated;
  const showForm = isShown && reduxData.isAuthenticated;

  return (
    <Container>
      <Content>
        <Title>Announcements</Title>
        {!isShown && (
          <OBcentering>
            <CreateOption onClick={toggle} item={'announcement'} />
          </OBcentering>
        )}

        {showDisclaimer && (
          <>
            <Disclaimer />
            <OBcentering>
              <OptionsButton onClick={toggle}>OK</OptionsButton>
            </OBcentering>
          </>
        )}

        {showForm && (
          <OBcentering>
            <CreateAnnounsForm />
            <OptionsButton onClick={toggle}>Close form</OptionsButton>
          </OBcentering>
        )}
        {announsComponent}
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
