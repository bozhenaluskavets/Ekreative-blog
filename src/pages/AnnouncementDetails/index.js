import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EditDeleteOptions } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { deleteOwnAnnouncement } from '../../store/slices/announcements';
import { fetchAnnouncementDetails } from '../../store/slices/announcementsDetails';
import { Announcement, Content, Text } from './style';

export const AnnouncementDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchAnnouncementDetails(params.id));
  }, []);

  const reduxData = useSelector((state) => ({
    list: state,
    isLoading: state.ui.isLoading,
    userId: state.auth.userInfo.id,
  }));

  const details = reduxData.list.announcementDetails.list;

  if (reduxData.isLoading) {
    return;
  }

  return (
    <Container>
      <Content>
        <Announcement>
          <Title>{details.title}</Title>
          <Text>{details.body}</Text>
        </Announcement>
        {details.userId === reduxData.userId && (
          <>
            <EditDeleteOptions
              onClick={() => {
                dispatch(deleteOwnAnnouncement(details.id));
                navigate('/announcements');
              }}
            >
              Delete
            </EditDeleteOptions>
            <Link to={`/announcements/edit/${details.id}`}>
              <EditDeleteOptions>Edit</EditDeleteOptions>
            </Link>
          </>
        )}
      </Content>
    </Container>
  );
};
