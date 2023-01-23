import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../globalStyles/buttons.style';
import { Error, EditInput } from '../../globalStyles/forms.style';
import { Title } from '../../globalStyles/multiComponents.style';
import { editOwnAnnouncement } from '../../store/slices/announcements';
import { Content, Form } from '../EditPostForm/style';

export const EditAnnouncementForm = () => {
  const { initAnnoun } = useSelector((state) => {
    return { initAnnoun: state.announcementDetails.list };
  });

  const {
    register,
    resetField,
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

  return (
    <Content>
      <Title>Edit announcement</Title>
      <Form
        onSubmit={handleSubmit((editedData) => {
          formHandler(editedData);
          resetField('title');
          resetField('body');
          dispatch(editOwnAnnouncement(editedData));
          navigate('/announcements');
        })}
      >
        <EditInput
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters long',
            },
          })}
          type="text"
        />
        <Error>{errors.title?.message}</Error>

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
          style={{
            fontSize: '20px',
            outline: 'none',
            resize: 'none',
            borderRadius: '10% 90% 10% 90% / 90% 10% 90% 10% ',
            padding: '35px 55px',
          }}
        />
        <Error>{errors.body?.message}</Error>

        <Button type="submit" disabled={!isValid}>
          Edit announcement
        </Button>
      </Form>
    </Content>
  );
};
