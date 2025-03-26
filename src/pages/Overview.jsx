import { ListCardWithLabels } from "../components/ListCardWithLabels";
import { Wrapper } from "../components/Wrapper";

export const Overview = () => {
  const personalDetails = [
    { label: "Name", value: "Tāne Kaio" },
    { label: "Location", value: "Melbourne, Victoria, Australia" },
    { label: "Age", value: "29 y/o" },
    {
      label: "Education",
      value: "Diploma of Information Technology (Coder Academy)",
    },
    {
      label: "Experience",
      value: "Junior",
    },
  ];
  const techSkills = [
    {
      label: "Languages",
      value: "JavaScript / TypeScript / Python / HTML / CSS / SQL",
    },
    {
      label: "JavaScript stack",
      value: "React / MongoDB / Mongoose / Express / Node",
    },
    {
      label: "Python stack",
      value: "Flask / PostgreSQL / SQL Alchemy / Marshmallow",
    },
    { label: "Data protection", value: "JWT / Bcrypt" },
    { label: "Project management", value: "Git / GitHub / Trello" },
  ];
  return (
    <>
      <Wrapper>
        <div>
          <ListCardWithLabels items={personalDetails} />
        </div>
        <div>
          <ListCardWithLabels items={techSkills} />
        </div>
      </Wrapper>
    </>
  );
};
