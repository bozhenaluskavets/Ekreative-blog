import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Back, Button } from '../../globalStyles/buttons.style';
import { Container, Title } from '../../globalStyles/multiComponents.style';
import { editOwnAnnouncement } from '../../store/slices/announcements';
import { Content, Form } from '../EditPostForm/style';
import { InputComponent } from '../../components/Input';
import { TextAreaComponent } from '../../components/TextArea';

export const EditAnnouncementForm = () => {
  const { initAnnoun } = useSelector((state) => {
    return { initAnnoun: state.announcementDetails.data };
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: initAnnoun.title,
      body: initAnnoun.body,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataToSubmit = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = initAnnoun.createdAt;
    editedData.userId = initAnnoun.userId;
    editedData.id = initAnnoun.id;
  };

  const onSubmit = (editedData) => {
    dataToSubmit(editedData);
    dispatch(editOwnAnnouncement(editedData));
    navigate(`/announcements/${initAnnoun.id}`);
  };

  return (
    <Container>
      <Content>
        <Title>Edit announcement</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 3,
                message: 'Title must be at least 3 characters long',
              },
            })}
            placeholder="Title"
            type="text"
            error={errors.title?.message}
          />

          <TextAreaComponent
            {...register('body', {
              required: 'Announcement content is required',
              minLength: {
                value: 10,
                message: 'Announcement content must be at least 10 characters long',
              },
            })}
            type="text"
            minRows={4}
            className="styleTextarea"
            placeholder="Announcement content"
            error={errors.body?.message}
          />

          <Button type="submit" disabled={!isValid}>
            Edit announcement
          </Button>
          <Link to={`/announcements/${initAnnoun.id}`}>
            <Back>Back to my announcement</Back>
          </Link>
        </Form>
      </Content>
    </Container>
  );
};
