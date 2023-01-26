import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../globalStyles/buttons.style';
import { Error } from '../../globalStyles/forms.style';
import { Title } from '../../globalStyles/multiComponents.style';
import { editOwnAnnouncement } from '../../store/slices/announcements';
import { Content, Form } from '../EditPostForm/style';
import '../../globalStyles/textarea.css';
import { InputComponent } from '../../components/Input';

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

  const formHandler = (editedData) => {
    editedData.updatedAt = new Date().toISOString();
    editedData.createdAt = initAnnoun.createdAt;
    editedData.userId = initAnnoun.userId;
    editedData.id = initAnnoun.id;
  };

  const onSubmit = (editedData) => {
    formHandler(editedData);
    dispatch(editOwnAnnouncement(editedData));
    navigate(`/posts/${initAnnoun.id}`);
    window.location.reload();
  };

  return (
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

        <ReactTextareaAutosize
          {...register('body', {
            required: 'Post content is required',
            minLength: {
              value: 10,
              message: 'Post content must be at least 10 characters long',
            },
          })}
          type="text"
          minRows={4}
          className="styleTextarea"
          placeholder="Announcement content"
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Edit announcement
        </Button>
      </Form>
    </Content>
  );
};
