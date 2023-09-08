import "./Section.scss";
import SectionHeader from "./SectionHeader";

function Section({ title, subTitle, text }) {
    return (
        <section className="section-normal">
            {title === undefined ? "" : <SectionHeader title={title} subTitle={subTitle} />}
            <p>{text}</p>
        </section>
    );
}

export default Section