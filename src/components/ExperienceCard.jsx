import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { styles } from "../styles.js";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: `${styles.cardBackgroundColor}`,
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%] object-contain rounded-full"
        />
      </div>
    }
  >
    {/* Title & company name */}
    <div>
      <h3 className="text-white text-[24px] font-semibold">
        {experience.title}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* job tasks */}

    <ul className={`mt-5 ml-5 space-y-2 list-disc ${styles.textColor2}`}>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point${index}`}
          className="text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export default ExperienceCard;
