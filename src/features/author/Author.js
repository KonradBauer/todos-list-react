import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Konrad Bauer"
      body={
        <p>
          Hej! Mam na imię Konrad i mam 28 lat. Jestem z wykształcenia muzykiem,
          gram głównie na klarnecie oraz na gitarze. Oprócz tego interesuję się
          gotowaniem, astronomią, e-sportem i inwestycjami na giełdzie.
        </p>
      }
    />
  </Container>
);
