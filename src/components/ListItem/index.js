import dateFormat, { masks } from 'dateformat';
import { Link } from 'react-router-dom';
import { Element, Elements, Extra, Item, Items } from './style';

/* eslint react/prop-types: 0 */

export const ListItem = ({ data, route }) => {
  const formatTime = (time) => {
    if (time) {
      masks.formatTime = 'dd.mm.yyyy';
      return dateFormat(time, 'formatTime');
    }
    return 'no time';
  };
  const formatCreatedAt = formatTime(data.createdAt);
  const formatUpdatedAt = formatTime(data.updatedAt);
  return (
    <Items key={data.id}>
      <Item>
        <Link to={`/${route}/${data.id}`}>
          <Extra>{data.title}</Extra>
        </Link>
        <Elements>
          <Element>Created: {formatCreatedAt}</Element>
          <Element>Updated: {formatUpdatedAt}</Element>
        </Elements>
      </Item>
    </Items>
  );
};
