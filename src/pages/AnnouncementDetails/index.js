import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { EditDeleteOptions } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { deleteOwnAnnouncement } from '../../store/slices/announcements';
import { fetchAnnouncementDetails } from '../../store/slices/announcementsDetails';
import { Announcement, Content, Text } from './style';

export const AnnouncementDetails = () => {
  const [isShownModal, setIsShownModal] = useState(false);

  const show = () => {
    setIsShownModal(true);
  };

  const hide = () => {
    setIsShownModal(false);
  };
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

  const isUserPost = details.userId === reduxData.userId;

  return (
    <Container>
      <Content>
        <Announcement>
          <Title>{details.title}</Title>
          <Text>{details.body}</Text>
        </Announcement>

        {isUserPost && (
          <>
            {!isShownModal && (
              <EditDeleteOptions
                onClick={() => {
                  show();
                }}
              >
                Delete
              </EditDeleteOptions>
            )}
            {isShownModal && (
              <Modal
                onClose={hide}
                item={'announcement'}
                dispatchFunc={deleteOwnAnnouncement}
                id={details.id}
                route={'/announcements'}
              />
            )}
            <Link to={`/announcements/edit/${details.id}`}>
              <EditDeleteOptions>Edit</EditDeleteOptions>
            </Link>
          </>
        )}
      </Content>
    </Container>
  );
};
