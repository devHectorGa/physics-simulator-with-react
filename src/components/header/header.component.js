import { Link } from 'react-router-dom';
import { Container } from './header.styles';

export default function Header() {
  return (
    <Container>
      <p>Logo</p>
      <nav>
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/scene`}>Escena</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
