import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utilities/formatTime';
import { textAbstract } from '../../utilities/textAbstract';
import { Element, Elements, Extra, Item, Items } from './style';

export const ListItem = ({ data, route }) => {
  const [showAsNew, setShowAsNew] = useState(data.isNewItem);

  const formatCreatedAt = formatTime(data.createdAt);
  const formatUpdatedAt = formatTime(data.updatedAt);

  const abstractTitle = textAbstract(data.title, 25);

  if (data.isNewItem) {
    setTimeout(() => {
      setShowAsNew(false);
    }, 1000);
  }

  return (
    <Items key={data.id}>
      <Item showAsNew={showAsNew}>
        <Link to={`/${route}/${data.id}`}>
          <Extra>{abstractTitle}</Extra>
        </Link>
        <Elements>
          <Element>Created: {formatCreatedAt}</Element>
          <Element>Edited: {formatUpdatedAt}</Element>
        </Elements>
      </Item>
    </Items>
  );
};
