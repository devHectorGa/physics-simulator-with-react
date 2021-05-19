import { Link } from 'react-router-dom';
import { Container } from './header.styles';

export default function Header() {
  return (
    <Container>
      <p>Logo</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scene">Escena</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
