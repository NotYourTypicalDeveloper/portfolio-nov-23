import { styles } from "../../styles.js";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="mb-20">
      <span className={`${styles.sectionHeadText} marker-underlining`}>
        {title}.
      </span>
    </h2>
  );
};

export default SectionTitle;
