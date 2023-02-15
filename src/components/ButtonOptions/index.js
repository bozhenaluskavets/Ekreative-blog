import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { EditDeleteOptions, Text } from './style';
import { OptionsButton } from '../../globalStyles/buttons.style';

export const EditOption = ({ onClick }) => {
  return (
    <EditDeleteOptions onClick={onClick}>
      <Text>Edit</Text>
      <EditIcon fontSize="small" />
    </EditDeleteOptions>
  );
};

export const DeleteOption = ({ onClick }) => {
  return (
    <EditDeleteOptions onClick={onClick}>
      <Text>Delete</Text>
      <DeleteIcon fontSize="small" />
    </EditDeleteOptions>
  );
};

export const CreateOption = ({ item, onClick }) => {
  return (
    <OptionsButton onClick={onClick}>
      <Text>Create {item}</Text>
      <LibraryAddIcon fontSize="small" />
    </OptionsButton>
  );
};
