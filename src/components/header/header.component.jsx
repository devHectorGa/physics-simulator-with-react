import { Container, Logo, LogoUN, NavUl, NavLi, Link } from './header.styles';
import { HOME, ESCENA, CATAPULTA } from '../../helpers/LINKS';

export default function Header() {
  return (
    <Container>
      <Link to={HOME}>
        <Logo src="img/logo.png" />
      </Link>
      <Link>
        <LogoUN src="img/logoUnal.png" />
      </Link>
      {/* <NavUl>
        <NavLi>
          <Link to={CATAPULTA}>Catapulta</Link>
        </NavLi>
        <NavLi>
          <Link to={ESCENA}>Escena</Link>
        </NavLi>
      </NavUl> */}
    </Container>
  );
}
