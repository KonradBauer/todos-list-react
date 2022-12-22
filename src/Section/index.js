import { Header, BodyContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    <sectionBody>
      <BodyContainer>{body}</BodyContainer>
    </sectionBody>
  </section>
);

export default Section;
