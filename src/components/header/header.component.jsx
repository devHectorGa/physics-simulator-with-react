import { Container, Logo, LogoUN, Link } from './header.styles';
import { HOME } from '../../helpers/LINKS';

export default function Header() {
  return (
    <Container>
      <Link to={HOME}>
        <Logo src="img/logo.png" />
      </Link>
      <LogoUN src="img/logoUnal.png" />
    </Container>
  );
}
