import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utilities/formatTime';
import { Element, Elements, Extra, Item, Items } from './style';

/* eslint react/prop-types: 0 */

export const ListItem = ({ data, route }) => {
  const [showAsNew, setShowAsNew] = useState(data.isNewItem);

  const formatCreatedAt = formatTime(data.createdAt);
  const formatUpdatedAt = formatTime(data.updatedAt);

  if (data.isNewItem) {
    setTimeout(() => {
      setShowAsNew(false);
    }, 1000);
  }
  return (
    <Items key={data.id}>
      <Item showAsNew={showAsNew}>
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
