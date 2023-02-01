import { Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    {body}
  </section>
);

export default Section;
