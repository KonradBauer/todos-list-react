import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import photo from "../../images/photo.png";
import { Wrapper } from "../tasks/TasksPage/Search/styled";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Konrad Bauer"
      body={
        <>
          <p>
            <Wrapper>
              <img src={photo} alt="Konrad Bauer" />
            </Wrapper>
          </p>
          <p>
            <Wrapper>
              Hej! Mam na imię Konrad i mam 28 lat. Jestem z wykształcenia muzykiem i jest to
              również moja wielka pasja. Oprócz tego interesuję się gotowaniem, astronomią,
              e-sportem i inwestycjami na giełdzie 😎.
            </Wrapper>
          </p>
        </>
      }
    />
  </Container>
);
