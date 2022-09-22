import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section>
        <header className="section__header--special">{title}
             {extraHeaderContent}
        </header>
        <sectionBody>
            <div className="sectionBody__taskContainer">
                {body}
            </div>
        </sectionBody>
    </section>
);

export default Section;