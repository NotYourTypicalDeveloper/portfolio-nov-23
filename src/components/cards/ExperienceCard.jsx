import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { styles } from "../../styles.js";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#ffffff12",
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
      <h3 className={`${styles.cardTitle}`}>{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* job tasks */}

    <ul className="mt-5 ml-5 space-y-2 list-disc">
      {experience.points.map((point, index) => (
        <li key={`experience-point${index}`} className={`${styles.cardText}`}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export default ExperienceCard;
