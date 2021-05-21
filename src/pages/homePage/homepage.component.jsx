import { Article, Container } from './homepage.styles';
import { ESCENA, CATAPULTA } from '../../helpers/LINKS';

export default function Homepage() {
  return (
    <Container>
      <Article to={CATAPULTA}>Catapulta</Article>
      <Article to={ESCENA}>Test</Article>
    </Container>
  );
}
