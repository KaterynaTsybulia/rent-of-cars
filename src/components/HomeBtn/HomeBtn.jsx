import { Link } from 'react-router-dom';
import css from './HomeBtn.module.css';

const HomeBtn = ({ children, to }) => {
  return (
    <Link className={css.buttonLink} to={to}>
      {children}
    </Link>
  );
};

export default HomeBtn;