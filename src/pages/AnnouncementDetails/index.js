import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Options } from '../../components/comments/Comment/style';
import { DeleteOption, EditOption } from '../../components/ButtonOptions';
import { Modal } from '../../components/Modal';
import { UserLabel } from '../../components/UserLabel';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { deleteOwnAnnouncement } from '../../store/slices/announcements';
import { fetchAnnouncementDetails } from '../../store/slices/announcementsDetails';
import { useToggle } from '../../utilities/toggleController';
import { Announcement, Content, Text, AnnounContent } from './style';
import { Details, Time } from '../PostDetails/style';
import { formatTime } from '../../utilities/formatTime';

export const AnnouncementDetails = () => {
  const [isShown, toggle] = useToggle();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchAnnouncementDetails(params.id));
  }, []);

  const reduxData = useSelector((state) => ({
    data: state.announcementDetails.data,
    isLoading: state.ui.isLoading,
    userId: state.auth.userInfo.id,
  }));

  const details = reduxData.data;

  if (reduxData.isLoading) {
    return;
  }

  const formatCreatedAt = formatTime(details.createdAt);
  const isUserAnnoun = details.userId === reduxData.userId;

  return (
    <Container>
      <Content>
        <Announcement>
          {details.user && <UserLabel data={details} />}
          <AnnounContent>
            <Title>{details.title}</Title>
            <Text>{details.body}</Text>
            <Details>
              <Time>{formatCreatedAt}</Time>
              {isUserAnnoun && (
                <Options>
                  {!isShown && <DeleteOption onClick={toggle} />}
                  {isShown && (
                    <Modal
                      onClose={toggle}
                      title={'Delete announcement'}
                      message={'Current changes will not be refunded'}
                      dispatchFunc={deleteOwnAnnouncement}
                      id={details.id}
                      route={'/announcements'}
                    />
                  )}
                  <Link to={`/announcements/edit/${details.id}`}>
                    <EditOption />
                  </Link>
                </Options>
              )}
            </Details>
          </AnnounContent>
        </Announcement>
      </Content>
    </Container>
  );
};
