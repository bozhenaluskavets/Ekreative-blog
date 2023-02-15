import { Link } from 'react-router-dom';
import { OBcentering, OptionsButton } from '../../globalStyles/buttons.style';
import { DisclaimerMessage, Element, Navigation } from './style';

export const Disclaimer = ({ toggle }) => {
  return (
    <OBcentering>
      <DisclaimerMessage>Please register or login to get this feature</DisclaimerMessage>
      <Navigation>
        <Element>
          <Link to={'/register'}>Go to register</Link>
        </Element>
        <Element>
          <Link to={'/login'}>Go to log in</Link>
        </Element>
      </Navigation>
      <OptionsButton onClick={toggle}>OK</OptionsButton>
    </OBcentering>
  );
};
