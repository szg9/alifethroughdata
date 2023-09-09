import "./Section.scss";
import SectionHeader from "./SectionHeader";

function Section({ sectionTitle, sectionSubTitle, sectionText }) {
    return (
        <section className="section-normal">
            {sectionTitle === undefined ? "" : <SectionHeader title={sectionTitle} subTitle={sectionSubTitle} />}
            <p>{sectionText}</p>
        </section>
    );
}

export default Section